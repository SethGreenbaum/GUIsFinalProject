import React from 'react';
import "./style.css";

function Login() {
      return (
  
        <div className="container">
          <div className="row login-card">
            <div className="col-md-6 col-md-offset-3" id="login-form">
              <h2 className="form-header">Login Form</h2>
              <form className="login">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Quarantinee Username</label>
                  <input type="text" className="form-control" id="email-input" placeholder="glitterUnicorn" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="password-input" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-default" id="login-btn">Login</button>
                <br />
                <p>Or sign up <a href="/signup">here</a></p>
              </form>
            </div>
          </div>
        </div>
      );
    };

export default Login;