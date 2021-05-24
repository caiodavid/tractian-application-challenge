export function maxTemperatureChartOptions(temperature) {
	const options = {
		chart: {
			type: 'gauge',
			plotBackgroundColor: null,
			plotBackgroundImage: null,
			plotBorderWidth: 0,
			plotShadow: false,
			height: 270,
		},

		title: null,

		pane: {
			startAngle: -150,
			endAngle: 150,
			background: [{
				backgroundColor: {
					linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
					stops: [
						[0, '#FFF'],
						[1, '#333']
					]
				},
				borderWidth: 0,
				outerRadius: '90%'
			}, {
				backgroundColor: {
					linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
					stops: [
						[0, '#333'],
						[1, '#FFF']
					]
				},
				borderWidth: 1,
				outerRadius: '100%'
			}, {
				// default background
			}, {
				backgroundColor: '#DDD',
				borderWidth: 0,
				outerRadius: '100%',
				innerRadius: '100%'
			}]
		},

		// the value axis
		yAxis: {
			min: 0,
			max: 200,

			minorTickInterval: 'auto',
			minorTickWidth: 1,
			minorTickLength: 10,
			minorTickPosition: 'inside',
			minorTickColor: '#666',

			tickPixelInterval: 30,
			tickWidth: 2,
			tickPosition: 'inside',
			tickLength: 10,
			tickColor: '#666',
			labels: {
				step: 2,
				rotation: 'auto'
			},
			title: {
				text: 'Temperatura Máxima em °C',
				style: {
					textAlign: 'center',
					width: 50
				}
			},
			plotBands: [{
				from: 0,
				to: 50,
				color: '#1b7ab5' // green
			}, {
				from: 50,
				to: 80,
				color: '#DDDF0D' // yellow
			}, {
				from: 80,
				to: 200,
				color: '#DF5353' // red
			}]
		},

		series: [{
			name: 'TempMax',
			data: [temperature],
			tooltip: {
				valueSuffix: ' °C'
			}
		}]

	};

	return options;
}