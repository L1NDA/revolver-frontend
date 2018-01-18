import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import classNames from "classnames";
import "./admin.css";
import Widget from "./Widgets.jsx";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ReactGridLayout from "react-grid-layout";
import "./css/react-grid-layout-styles.css";
import "./css/react-resizable-styles.css";

class Admin extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  render () {
    var widget = classNames ({
      widget: true
    })

    var layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 2, minW: 1, minH: 2},
      {i: 'b', x: 1, y: 0, w: 3, h: 3, minW: 1, minH: 2},
      {i: 'c', x: 0, y: 1, w: 1, h: 4, minW: 1, minH: 2}
    ];

    return (
        <div className="admin">
          <ReactGridLayout className="grid" layout={layout} cols={4} rowHeight={75} width={1200}>
            <div key="a" className={widget}>A</div>
            <div key="b" className={widget}>B</div>
            <div key="c" className={widget}>C</div>
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
