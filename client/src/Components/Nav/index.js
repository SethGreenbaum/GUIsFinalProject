import React, { Component } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";
import LoginBtn from "../LoginBtn/LoginBtn";
import SignupBtn from "../SignupBtn/index";
import "./style.css";

export default class Nav extends Component {

  componentDidMount() {
      document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.dropdown-trigger');
        var instances = M.Dropdown.init(elems, {});
    });
}

render() {
    return (
        <div className="navbar">
            <ul id="dropdown1" className="dropdown-content">
                <li><a href="#!">Browse</a></li>
                <li><a href="#!">Messages</a></li>
                <li><a href="#!">Posts</a></li>
                <li><a href="#!">Favorites</a></li>
                <li><a href="#!">Settings</a></li>
                <li className="divider"></li>
                <li>
                  <a href="/LandingPage/" 
                  id="logoutID">
                    Logout
                    </a>
                    </li>
            </ul>
        <nav className="nav-extended">
    <div className="nav-wrapper z-depth-3">
      <a href="/" id="nav-title" className="brand-logo center">Quarantinee</a>
      <ul id="nav-mobile">
      {/* <!-- Dropdown Trigger --> */}
      <li><a className="dropdown-trigger" href="#!" id="Dashboard" data-target="dropdown1">User Options<i className="material-icons right">arrow_drop_down</i></a></li>          
      <li className="hide-on-med-and-down">
        <Link id="nav-title"
        to="/"
        className={
          window.location.pathname === "/"
          ? "nav-link active"
          : "nav-link"
        }
        >
          Browse
        </Link>
      </li>
      </ul>
      {/* <ul id="nav-mobile" className="right hide-on-med-and-down">
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
      </ul> */}
    </div>
  </nav>
  </div>
    );
}

}

