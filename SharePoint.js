< script language = "javascript"
src = "/_layouts/15/SP.RequestExecutor.js"
type = "text/javascript" > < /script><script language="javascript" src="/pwa / SiteAssets / elm - jquery - 3.3 .1.min.js " type="
text / javascript "></script><script language="
javascript " src=" / pwa / SiteAssets / Amcharts / core.js " type="
text / javascript "></script><script language="
javascript " src=" / pwa / SiteAssets / Amcharts / charts.js " type="
text / javascript "></script><script language="
javascript " src=" / pwa / SiteAssets / Amcharts / themes / animated.js " type="
text / javascript "></script>

<
script >
    _spBodyOnLoadFunctionNames.push("DrawBarChart"); // Push to call stack


function getQueryStringParameter(myParam) { // 

    if (document.URL.indexOf("?") > 0) {
        var params = document.URL.split("?")[1].split("&"); // Here it will take the params and put it after the = then will add the & 



        for (var i = 0; i < params.length; i = i + 1) {
            var singleParam = params[i].split("=");
            console.log(params[i]);

            console.log(singleParam[0]);
            console.log(singleParam[1]);

            if (singleParam[0].toLowerCase() == myParam.toLowerCase())
                return singleParam[1];
        }
    }

}

function DrawBarChart() {

    var cUrl;
    var cProjectId;
    var cProjectDataUrl;
    var oResult;

    cUrl = _spPageContextInfo.siteAbsoluteUrl;

    console.log("host Url is " + cUrl);
    //http://nahj.elm.sa/PWA/_api/ProjectData/Projects
    cProjectDataUrl = cUrl + "/_api/ProjectData/Projects";
    var cStageUrl = "?$select=ProjectId,StagesInfo";

    cProjectDataUrl = cProjectDataUrl + cStageUrl;


    // Get Project Counter Data from list WF-Workflow Stage Tracking

    console.log(cProjectDataUrl);

    $(document).ready(function() {

        var executorChart = new SP.RequestExecutor(cUrl);

        getProjectsInfo(executorChart, cProjectDataUrl);

    });


}

function getProjectsInfo(exec, dataUrl) {

    oResult = $.ajax({

        url: dataUrl,
        type: "GET",
        dataType: "json",
        headers: { Accept: "application/json;odata=verbose" }
    });

    oResult.done(processProjectInfo(oResult, textStatusResponse, restReponse, exec));

}

function processProjectInfo(oResult, txtStatusResponse, restResponse, exec) {
    // Here we should build the chart under this function
    var i = 0;

    for (i = 0; i < oResult.d.results.length; i++) {

        var stageInfoUrl = oResult.d.results[i];
        processStageInfo(exec, stageInfoUrl)
    }
}




function processStageInfo(exec, dataUrl) {

    oResult = $.ajax({

        url: dataUrl,
        type: "GET",
        dataType: "json",
        headers: { Accept: "application/json;odata=verbose" }
    });



    oResult.done(function(oResult, txtStatusResponse, restResponse) { // Here we should build the chart under this function

        var i = 0;


    });

} <
/script> <
button onclick = "DrawBarChart()"
type = "button" > Click me < /button> <
    div id = "divcharts" > & #160;</div>