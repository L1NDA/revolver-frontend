import React, { Component } from 'react';
import Logo from "./Logo.js";
import './App.css';
import Form from './Form.js';
// import Home from './Home.js';
import Admin from './Admin.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import "./css/react-grid-layout-styles.css";
import "./css/react-resizable-styles.css";
// import Globe from './Globe.js'

class App extends Component {
  render() {
    return (
      <div className="homepage">
        <Logo/>
        <Router>
          <Switch>
            <Route path="/" exact component={Form}/>
            <Route path="/admin" component={Admin}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
