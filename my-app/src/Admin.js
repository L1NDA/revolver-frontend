import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import classNames from "classnames";
// import './Form.css';
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


        </div>
    )
  }
}

export default Admin;

// <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
// <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
//   <input type="password" className="form-control" name="password" placeholder="Password" onKeyPress={this.handleKeyPress}  />
// </div>

  //{this.state.passwordValid &&
  //     <button type="submit" className="btn btn-primary" disabled={!this.state.passwordValid}>Sign up</button>
  // }

// <FormErrors formErrors={this.state.formErrors} />
  // <a href="google.com"><div type="submit" className="btn" disabled={!this.state.passwordValid}>Log In</div></a>
    // <input type="email" required className={emailClasses} name="email" placeholder="EMAIL" onKeyPress={this.handleKeyPress}  />
