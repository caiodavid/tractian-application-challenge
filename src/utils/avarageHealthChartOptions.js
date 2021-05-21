export function getAvarageHealthChartOptions(avarageHealth) {
	const options = {
		chart: {
      type: "solidgauge",
      margin: [0, 0, 0, 0],
      padding: 0,
      height: "50%",
    },

    title: null,

    pane: {
      center: ["50%", "70%"],
      size: "100%",
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor: "#EEE",
        innerRadius: "60%",
        outerRadius: "100%",
        shape: "arc",
      },
    },

    exporting: {
      enabled: false,
    },

    tooltip: {
      enabled: false,
    },

    // the value axis
    yAxis: {
      stops: [
        [0.3, "#DF5353"], // red
        [0.5, "#DDDF0D"], // yellow
        [0.8, "#55BF3B"], // green
      ],
      lineWidth: 0,
      tickWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      labels: {
        y: 15,
      },
      min: 0,
      max: 100,
      title: {
        text: "Healthscore",
        y: 40,
        style: {
          color: "#A9A9A9",
          fontSize: "20px",
          fontWeight: "bold",
          lineHeight: "20px",
        },
      },
    },

    credits: {
      enabled: false,
    },

    series: [
      {
        name: "Healthscore",
        type: "solidgauge",
        innerSize: "80%",
        data: [avarageHealth],
        dataLabels: {
          format:
            '<div style="text-align:center">' +
            '<span style="font-size:25px">{y}</span><br/>' +
            '<span style="font-size:12px;opacity:0.4">ptns</span>' +
            "</div>",
        },
        tooltip: {
          valueSuffix: " pnts",
        },
      },
    ],

    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 5,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
	}

	return options;
}