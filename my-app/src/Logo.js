import React, { Component } from 'react';
import logo from "./img/icon-small.png";
// var logo = require("./img/icon-small.png");


class Logo extends Component {

//   handleScroll(event) {
//     if (event.srcElement.body.scrollTop > 10) {
//       console.log("works");
//     }
// }

  render() {
    return (
      <a href="/" className="logo-container">
        <img className="logo" src={logo}/>
      </a>
    );
  }
}

export default Logo;
