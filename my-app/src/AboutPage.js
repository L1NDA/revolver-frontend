import React, { Component } from 'react';
import Logo from "./Logo.js";
import './App.css';

// var logo = require("./img/icon-small.png");


class About extends Component {
  render() {
    return (
      <div className="aboutPage">
      <h3>ABOUT</h3>
      <p>Revolver is a data analytics service that uses deep learning to
      forecast global trends (e.g., rioting, crime, epidemics). Through social
       media mining, the Revolver team seeks to harness the power of AI and
       deep neural networks to gain hidden insights into big data on a global
       scale.</p>
       <div className="closeDiv">
       <button onClick={this.props.closePopup}>Close</button>
       </div>
      </div>
    );
  }
}

export default About;
