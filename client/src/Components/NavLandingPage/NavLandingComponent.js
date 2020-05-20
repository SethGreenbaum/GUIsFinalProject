import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginBtn from "../LoginBtn/LoginBtn";
import SignupBtn from "../SignupBtn/index";
import "./style.css";

export default class NavLandingPage extends Component {

  
render() {
    return (
        <div className="navbar">
        <nav className="nav-extended">
    <div className="nav-wrapper z-depth-3">
      <a href="/" id="nav-title" className="brand-logo center">Quarantinee</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <Link
          to="/Signup/"
          className={
            window.location.pathname === "/Signup/"
            ? "nav-link active"
            : "nav-link"
          }
          >
            <SignupBtn />
          </Link>
        </li>
        <li>
          <Link 
        to="/Login/"
        className={
          window.location.pathname === "/Login/"
          ? "nav-link active"
          : "nav-link"
        }
        >
        <LoginBtn />
        </Link>
        </li>
      </ul>
    </div>
  </nav>
  </div>
    );
}

}

