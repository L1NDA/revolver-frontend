import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import classNames from "classnames";
import "./admin.css";
import Widget from "./Widgets.jsx";
import Twitter from "./Twitter.jsx";
import donutexample from "./img/donutexample.png"
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ReactGridLayout from "react-grid-layout";
import "./css/react-grid-layout-styles.css";
import "./css/react-resizable-styles.css";
import Donut from "./Donut.js";
import Logo from "./Logo.js"
import Graph from "./Graph.js"
// import Map from "./Map.js";
// import gif from "./img/hacker-35.gif";

class Admin extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  render () {
    var statsColor = classNames ({
      widget: true,
      statscoloring: true
    })
    var twitter = classNames ({
      widget: true,
      twittercoloring: true,
      widgetnopad: true
    })
    var graphColor = classNames ({
      widget: true,
      graphcoloring: true
    })
    var mapColor = classNames ({
      widget: true,
      mapcoloring: true
    })
    var reportColor = classNames ({
      widget: true,
      reportcoloring: true
    })
    var title = classNames ({
      widget: true,
      titleAndSearch: true,
      label: true
    })
    var polar = classNames ({
      widget: true,
      polar: true
    })

    var label = classNames ({
      label: true
    })

    var layout = [
      {i: 'Graph', x: 3, y: 5, w: 7, h: 3, minW: 2, minH: 2},
      {i: 'Stats', x: 0, y: 0, w: 3, h: 2, minW: 2, minH: 2},
      {i: 'Twitter', x: 0, y: 3, w: 3, h: 5, minW: 3, minH: 5, maxW: 3, maxH: 5},
      {i: 'Map', x: 3, y: 0, w: 5, h: 4, minW: 4, minH: 4},
      {i: 'Polar', x: 8, y: 0, w: 2, h: 2, minW: 2, minH: 2},
      {i: 'Report', x: 8, y: 2, w: 2, h: 2, minW: 2, minH: 2},
      {i: 'Title', x: 0, y: 0, w: 10, h: 1, static: true}
    ];

    return (
        <div className="admin">
          <Logo admin={true}/>
          <ReactGridLayout margin={[30, 30]} className="grid" layout={layout} cols={10} rowHeight={75} width={1000}>
          <div key="Title"  className={title}>
            <h2>Ferguson, MO</h2>
          </div>
            <div key="Stats"   className={statsColor}>
              <h3 className={label}>STATS</h3>
            </div>
            <div key="Graph" className={graphColor}>
              <h3 className={label}>GRAPH</h3>
              <Graph/>
            </div>

            <div key="Twitter" className={twitter}><Twitter/></div>

            <div key="Map"   className={mapColor}>
              <h3 className={label}>MAP</h3>
            </div>
            <div key="Polar"   className={polar}>
              <Donut/>
            </div>
            <div key="Report"   className={reportColor}>
              <h3 className={label}>REPORT UNREST</h3>
            </div>
          </ReactGridLayout>
        </div>
    )
  }
}

export default Admin;

// <div className="grid">
//   <Widget colspan={2} color="green"/>
//   <Widget />
// </div>
