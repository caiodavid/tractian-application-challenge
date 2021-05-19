export function overviewAssetsChartOptions(inOperationCounter, inAlertCounter, inDowntimeCounter) {
	const options = {
		chart: {
			plotBorderWidth: 0,
		},
		title: {
			text: `ATIVOS`,
			align: "center",
			verticalAlign: "middle",
			y: -80,
			style: {
				color: "#A9A9A9",
				fontSize: "20px",
				fontWeight: "bold",
				lineHeight: "20px",
			},
		},
		plotOptions: {
			pie: {
				dataLabels: {
					enabled: false,
				},
				startAngle: -120,
				endAngle: 120,
				center: ["50%", "35%"],
				size: "75%",
			},
		},

		subtitle: {
			align: "center",
			floating: false,
			style: {
				color: "#4F4F4F",
				fontWeight: "bold",
				fontSize: "20px",
			},
			text: `${inOperationCounter + inAlertCounter + inDowntimeCounter
				}&#128640`,
			verticalAlign: "middle",
			y: -40,
		},

		colors: [
			{
				linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
				stops: [
					[0, "#ADFF2F"],
					[1, "#006400"],
				],
			},
			{
				linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
				stops: [
					[0, "#F0E68C"],
					[1, "#FFFF00"],
				],
			},
			{
				linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
				stops: [
					[0, "#FF7F50"],
					[1, "#FF0000"],
				],
			},
		],

		series: [
			{
				type: "pie",
				name: "Quantidade",
				innerSize: "88%",
				data: [
					["Em operação", inOperationCounter],
					["Em alerta", inAlertCounter],
					["Em parada", inDowntimeCounter],
				],
				showInLegend: true,
			},
		],

		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'center',
			itemMarginBottom: 10,
      itemStyle: {
				color: "#4F4F4F",
				fontSize: 14,
				fontWeight: "normal",
			},
		},
	};

	return options;
}