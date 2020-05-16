import React from "react";
import "./style.css";

function SignupForm() {
    return (
      <div id="SignupForm">
        <div className="container">
          <div className="row Signup-card">
            <div className="card col s12 m6 offset-m3 l6 offset-l3" id="signup-form">
              <h2 className="form-header">Sign Up Form</h2>
              <form className="Signup">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Quarantinee Username</label>
                  <input type="text" className="form-control" id="email-input" placeholder="glitterUnicorn" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="password-input" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-default" id="Signup-btn">Sign Up</button>
                <br />
                <p>Or Log in <a href="/Login">here</a></p>
              </form>
            </div>
          </div>
        </div>
        </div>
      );
    }
    
export default SignupForm;