import React, { Component }  from 'react';
import ReactDOM from 'react-dom'
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

  // state = {
  //   isTop: true,
  // };
  //
  // componentDidMount() {
  //   document.addEventListener('scroll', () => {
  //     const isTop = window.scrollY > 5;
  //     if (isTop !== this.state.isTop) {
  //         this.setState({ isTop })
  //         console.log("bot")
  //     }
  //   });
  // }

  _handleScroll(ev) {
        console.log("Scrolling!");
    }
    componentDidMount() {
        const page = ReactDOM.findDOMNode(this.refs.page)
        page.addEventListener('scroll', this._handleScroll);
    }
    componentWillUnmount() {
        const page = ReactDOM.findDOMNode(this.refs.page)
        page.removeEventListener('scroll', this._handleScroll);
    }

  render() {
    return (
      <div className="homepage" ref="page">
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
