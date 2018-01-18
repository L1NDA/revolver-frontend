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

class Admin extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  render () {

    return (
        <div className="admin">
          <div className="grid">
            <Widget colspan="2" color="green"/>
            <Widget />
          </div>
        </div>
    )
  }
}

export default Admin;
