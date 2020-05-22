import React from "react";
import "./style.css";

function LoginForm() {
    return (
      <div id="loginForm">
        <div>
          <div className="row login-card">
            <div className="col s12 m12 l12" id="login-form">
              <h4 className="form-header">Login Form</h4>
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
              </form>
            </div>
          </div>
        </div>
        </div>
      );
    }
    
export default LoginForm;