import React, { Component } from 'react';
import classNames from "classnames";
import { Line } from 'react-chartjs-2';

class Graph extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getState = () => ({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Volume of Tweets',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'white',
        pointBackgroundColor: 'white',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  });

  getInitialState() {
		return this.getState();
	}

	componentWillMount() {
		setInterval(() => {
			this.setState(this.getState());
		}, 5000);
	}

  render () {
    const options = {
        legend: {display: false},
        maintainAspectRatio: false,
        responsive: true,
        layout: {padding: {bottom: 95, top: 10, left: 20, right: 40}, position: "chartArea", height: "300"},
    }

    const grid = {
      color: "white"
    }

    return (
      <Line data={this.state} options={options} height={200}/>
    )
  }
}

export default Graph;

// const options = {
//     legend: {display: false},
//     scales: { xAxes: [{ display: false, }], yAxes: [{ display: false, }], },
//     maintainAspectRatio: false,
//     // elements: {arc: {borderColor: "black", borderWidth: "3"}},
//     // gridLines: {color: "white"}
//     scale: {
//       gridLines: {color: "#43F7DD"},
//       // ticks: {fontColor: "#43F7DD", fontFamily: "Proxima Nova", backdropColor: "black"},
//     },
//     layout: {padding: 1, position: "chartArea"}
// }
