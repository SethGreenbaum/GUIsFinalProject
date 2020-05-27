import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import "./style.css";


class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      redirectTo: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit');

    axios
      .post('/user/login', {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log('login response: ')
        console.log(response)
        if (response.status === 200) {
          // update App.js state
          // this.props.updateUser({
          //   loggedIn: true,
          //   username: response.data.username
          // })
          // update the state to redirect to home
          console.log("this worked for login!!")
          this.setState({
            redirectTo: '/Members'
          })
        }
      }).catch(error => {
        console.log('login error: ')
        console.log(error);
      })
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div id="loginForm">
          <div>
            <div className="row login-card">
              <div className="col s12 m12 l12" id="login-form">
                <h4 className="form-header">Login Form</h4>
                <form className="login">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Quarantinee Username</label>

                    <input className="form-control"
                      type="text"
                      id="email-input"
                      name="username"
                      placeholder="glitterUnicorn"
                      value={this.state.username}
                      onChange={this.handleChange}
                    />

                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>

                    <input className="form-control"
                      type="password"
                      id="password-input"
                      name="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />

                  </div>
                  
                  <button
                    className="btn btn-default"
                    onClick={this.handleSubmit}
                    id="login-btn"
                    type="submit"
                  >
                  <Link to="/Members"></Link>Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
};

export default LoginForm;