import React, { Component } from "react";
import axios from 'axios';
import "./style.css";

class SignupForm extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      confirmPassword: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSubmit(event) {
    console.log('sign-up handleSubmit, username: ')
    console.log(this.state.username)
    event.preventDefault()

    //request to server to add a new username/password
    axios.post('/user/', {
      username: this.state.username,
      password: this.state.password
    })
      .then(response => {
        console.log(response)
        if (!response.data.errmsg) {
          console.log('successful signup')
          this.setState({ //redirect to login page
            redirectTo: '/Members'
          })
        } else {
          console.log('username already taken')
        }
      }).catch(error => {
        console.log('signup error: ')
        console.log(error)
      })
  };


  render() {
    return (
      <div id="SignupForm">
        <div>
          <div className="row signup-card">
            <div className="col s12 m12 l12" id="signup-form">
              <h2 className="form-header">Sign Up Form</h2>
              <form className="Signup">

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

                <div className="form-group">
                  <a className="modal-close">
                  <button
                    className="btn btn-default"
                    onClick={this.handleSubmit}
                    type="submit"
                    id="Signup-btn"
                  >Sign Up</button>
                  </a>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
};


export default SignupForm;