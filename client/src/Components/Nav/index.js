import React from "react";
import { Link } from "react-router-dom";
import LoginBtn from "../LoginBtn/LoginBtn";
import SignupBtn from "../SignupBtn/index";
import "./style.css";

function Nav() {
    return (
        <div className="navbar-fixed">
            <ul id="dropdown1" class="dropdown-content">
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li class="divider"></li>
                <li><a href="#!">three</a></li>
            </ul>
        <nav>
    <div className="nav-wrapper z-depth-3">
      <a href="/" id="nav-title" className="brand-logo">Quarantinee</a>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
      {/* <!-- Dropdown Trigger --> */}
      <li><a class="dropdown-trigger" href="#!" id="navTitle" data-target="dropdown1">Dashboard<i class="material-icons right">arrow_drop_down</i></a></li>          
      <li>
        <Link
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
          <li>
          <form>
        <div className="input-field" id="searchNav">
          <input id="search" type="search" required />
          <label className="label-icon" for="search"><i className="material-icons" id="navTitle">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
      </li>
      </ul>
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

export default Nav;