(function() {
	"use strict";

	var root = this,
		Chart = root.Chart,
		helpers = Chart.helpers;

	var defaultConfig = {
		//Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
		scaleBeginAtZero : true,

		//Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines : true,

		//String - Colour of the grid lines
		scaleGridLineColor : "rgba(0,0,0,.05)",

		//Number - Width of the grid lines
		scaleGridLineWidth : 1,

		//Number - Pixel width of the bar stroke
		barStrokeWidth : 2,

		//Number - Spacing between each of the X value sets
		barValueSpacing : 5,

		//Number - Spacing between data sets within X values
		barDatasetSpacing : 1,

		//String - A legend template
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",

		//Number - ratio of width of end whiskers to width of the box
		whiskerWidth: 0.75,
	}

	Chart.types.Bar.extend({
		name : "Box",
		defaults : defaultConfig,
		initialize : function(data) {
			this.options.showStroke = true;
			Chart.types.Bar.prototype.initialize.apply(this, arguments);
			this.eachBars(function(bar, index, datasetIndex) {
				helpers.extend(bar, {
					errorBar : false,
					min : data.datasets[datasetIndex].min[index],
					q1 : data.datasets[datasetIndex].q1[index],
					q3 : data.datasets[datasetIndex].q3[index],
					max : data.datasets[datasetIndex].max[index]
				});
				bar.save();
			}, this);
			console.log(this.datasets);
		},
	});


}).call(this);