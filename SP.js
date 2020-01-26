//<script language="javascript" src="/_layouts/15/SP.RequestExecutor.js" type="text/javascript"></script>
//<script language="javascript" src="/pwa/SiteAssets/elm-jquery-3.3.1.min.js" type="text/javascript"></script>
/* <script language="javascript" src="/pwa/SiteAssets/Amcharts/core.js" type="text/javascript"></script>
<script language="javascript" src="/pwa/SiteAssets/Amcharts/charts.js" type="text/javascript"></script>
<script language="javascript" src="/pwa/SiteAssets/Amcharts/themes/animated.js" type="text/javascript"></script>
*/
//<script>
//_spBodyOnLoadFunctionNames.push("DrawBarChart"); // Push to call stack


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

// var count = 0 ;

// function GetWFError(){

//     var Array = [count];

//     for(count = 0; count < cProjectDataUrl.Array ; count++){

//         //if()

//     }


// }

function getProjectsInfo(exec, dataUrl) {

    oResult = $.ajax({

        url: dataUrl,
        type: "GET",
        dataType: "json",
        headers: { Accept: "application/json;odata=verbose" }
    });



    oResult.done(function(oResult, txtStatusResponse, restResponse) { // Here we should build the chart under this function

        //oResult.d.results[0].StageInformation
        var i = 0;

        // try {
        //     for (i = 0; i < oResult.d.results.length; i++) {

        //         if (oResult.d.results[i].ProjectType == 0) {

        //             pt1.Counter++;
        //         } else if (oResult.d.results[i].ProjectType == 5) {

        //             pt2.Counter++;
        //         } else if (oResult.d.results[i].ProjectType == 6) {
        //             pt3.Counter++;
        //         } else {
        //             console.log("NA")
        //         }

        //     }


        // am4core.useTheme(am4themes_animated);

        // var chart = am4core.create("divcharts", am4charts.XYChart);
        // chart.colors.saturation = 0.4;
        // chart.data.push(pt1, pt2, pt3);

        // var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        // categoryAxis.renderer.grid.template.location = 0;
        // categoryAxis.dataFields.category = "ProjectType";
        // categoryAxis.renderer.minGridDistance = 20;

        // var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
        // valueAxis.renderer.maxLabelPosition = 0.98;

        // var series = chart.series.push(new am4charts.ColumnSeries());
        // series.dataFields.categoryY = "ProjectType";
        // series.dataFields.valueX = "Counter";
        // series.tooltipText = "{valueX.value}";
        // series.sequencedInterpolation = true;
        // series.defaultState.transitionDuration = 1000;
        // series.sequencedInterpolationDelay = 100;
        // series.columns.template.strokeOpacity = 0;

        // chart.cursor = new am4charts.XYCursor();
        // chart.cursor.behavior = "panY";


        // // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
        // series.columns.template.adapter.add("fill", function(fill, target) {
        //     return chart.colors.getIndex(target.dataItem.index);
    });
} catch (ex) {
    console.log(ex.message);
}


});


}

//<button onclick = "DrawBarChart()" type = "button" > Click me </button>
// <div id = "divcharts" > & #160;</div>