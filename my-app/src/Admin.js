import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import classNames from "classnames";
import "./admin.css";
import Widget from "./Widgets.jsx";
import Widget0 from "./Widgets0.jsx";
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
      transparent: true
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
      titleAndSearch: true
    })
    var polar = classNames ({
      widget: true,
      polar: true
    })

    var layout = [
      {i: 'Graph', x: 0, y: 4, w: 7, h: 3, minW: 2, minH: 2},
      {i: 'Stats', x: 7, y: 0, w: 3, h: 2, minW: 2, minH: 2},
      {i: 'Twitter', x: 7, y: 3, w: 3, h: 5, minW: 3, minH: 5, maxW: 3, maxH: 5},
      {i: 'Map', x: 2, y: 0, w: 5, h: 4, minW: 4, minH: 4},
      {i: 'Polar', x: 0, y: 2, w: 2, h: 2, minW: 2, minH: 2},
      {i: 'Report', x: 0, y: 0, w: 2, h: 2, minW: 2, minH: 2},
      {i: 'Title', x: 0, y: 0, w: 10, h: 1, static: true}
    ];

    return (
        <div className="admin">
          <ReactGridLayout margin={[25,25]} className="grid" layout={layout} cols={10} rowHeight={75} width={1000}>
          <div key="Title"   className={title}>
            City Name
          </div>
            <div key="Stats"   className={statsColor}>
              <h3>STATS</h3>
            </div>
            <div key="Graph" className={graphColor}>
              <h3>GRAPH</h3>
            </div>

            <div key="Twitter" className={twitter}><Widget0/></div>

            <div key="Map"   className={mapColor}>
              <h3>MAP</h3>
            </div>
            <div key="Polar"   className={polar}>
              <Donut/>
            </div>
            <div key="Report"   className={reportColor}>
              <h3>REPORT UNREST</h3>
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
