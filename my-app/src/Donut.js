import React, { Component } from 'react';
import classNames from "classnames";
import { Polar } from 'react-chartjs-2';

class Donut extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getState = () => ({
      labels: [
        'Red',
        'Green',
        'Yellow'
      ],
      datasets: [{
        data: [this.getRandomInt(50, 200), this.getRandomInt(100, 150), this.getRandomInt(150, 250)],
        backgroundColor: [
        '#CCC',
        '#36A2EB',
        '#FFCE56'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ]
      }]
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
        scales: { xAxes: [{ display: false, }], yAxes: [{ display: false, }], },
        maintainAspectRatio: false,
        elements: {arc: {borderColor: "white"}},
        // gridLines: {color: "white"}
        scale: {
          gridLines: {color: "white"},
          ticks: {fontColor: "white", fontFamily: "Proxima Nova", backdropColor: "black"},
        },
        layout: {padding: 10}
    }

    const grid = {
      color: "white"
    }

    return (
      <Polar data={this.state} options={options} gridLines={grid}/>
    )
  }
}

export default Donut;
