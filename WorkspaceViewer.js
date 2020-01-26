var hostUrl;
var projectId;
var charterId;
var serialNo;
var formState;
var projectDataUrl;
var stageName;
var workspaceUrl;
var documentLibraryUrl = "/Shared Documents/";
var k2Url = "http://elm-psdb-wv-02/";
var oDataResult;

function UpdateWorkspaceUrl(workSpaceName) {
  hostUrl = _spPageContextInfo.siteAbsoluteUrl;

  projectId = getQueryStringParameter("ProjUID");
  charterId = getQueryStringParameter("charterId");
  serialNo = getQueryStringParameter("SerialNo");
  formState = getQueryStringParameter("Form State");

  projectDataUrl =
    hostUrl + "/_api/ProjectData/Projects(guid'" + projectId + "')";

  if (
    projectId != null &&
    workSpaceName != "" &&
    workSpaceName != null &&
    workSpaceName != undefined
  ) {
    if (workSpaceName == "ProjectCharter") {
      var targetLocation =
        k2Url +
        "Runtime/Runtime/Form/Charter+Redirect/" +
        "?project id=" +
        projectId;

      targetLocation = targetLocation.replace("nahj.elm.sa", "elm-epm-dev-02");

      //Set the iframe src attrobute
      var myFrame = document.getElementById("MyFrame");

      // myFrame.width = "100%-200px";
      // myFrame.style.marginLeft = "15%";
      myFrame.src = targetLocation;
    } else if (workSpaceName == "ResourceCenter") {
    } else if (workSpaceName == "MyTasks") {
    } else if (workSpaceName == "Documents") {
      // Get Project General Data
      getProjectWorkspaceInfo();
    } else if (workSpaceName == "Dashboard") {
    }
  }
}

function getProjectWorkspaceInfo() {
  $(document).ready(function() {
    var executor = new SP.RequestExecutor(hostUrl);
    execGetProjectWorkspaceInfo(executor);
  });
}

function execGetProjectWorkspaceInfo() {
  var data = $.ajax({
    url: projectDataUrl,
    type: "GET",
    dataType: "json",
    headers: { Accept: "application/json;odata=verbose" }
  });

  data.done(function(data, txtStatusResponse, restResponse) {
    workspaceUrl = data.d.ProjectWorkspaceInternalUrl;

    // Get project stage information where stage status = 1 from StagesInfo
    //  projectDataUrl = hostUrl + "/_api/ProjectData/Projects(guid'"+projectId+"')/StagesInfo?$filter=StageStatus eq 1";

    //to do : How to handle projects with completed workflow cycle
    var targetLocation = workspaceUrl + documentLibraryUrl + "?isdlg=1";
    targetLocation = targetLocation.replace("nahj.elm.sa", "elm-epm-dev-02");

    //Set the iframe src attrobute
    var myFrame = document.getElementById("MyFrame");

    // myFrame.width = "100%-200px";
    // myFrame.style.marginLeft = "15%";
    myFrame.src = targetLocation;
  });
}

function getQueryStringParameter(myParam) {
  if (document.URL.indexOf("?") > 0) {
    var params = document.URL.split("?")[1].split("&");

    for (var i = 0; i < params.length; i = i + 1) {
      var singleParam = params[i].split("=");

      if (singleParam[0].toLowerCase() == myParam.toLowerCase())
        return singleParam[1];
    }
  }
}
