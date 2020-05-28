import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import "./style.css";
import API from "../../utils/API/userApi"
import ls from "local-storage"


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirectTo: ''
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

    function refreshPage() {
      window.location.reload(false);
    }
  

    axios
      .post('/user/login/login', {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log('login response: ')
        console.log(response)
        if (response.status === 200) {
          ls.set('username', this.state.username)
          // update App. js state with username, this is what doesn't work,
          // doesn't recognize updateUser props, tried drilling but got stuck in modal
          // this.props.updateUser({
          //   loggedIn: true,
          //   username: response.data.username
          // })

          // update the state to redirect to home
          console.log("this worked for login!!")
          this.setState({
            redirectTo: '/Members'
          })
          refreshPage();
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
        <div id="loginForm" updateUser={this.props.updateUser}>
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
        {/* <Link to="/Members"></Link> */}
                  Login</button>
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