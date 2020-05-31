import React, { Component } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";
import HeadlineCard from "../CocktailoftheDayBtn/index";
// import LoginBtn from "../LoginBtn/LoginBtn";
// import SignupBtn from "../SignupBtn/index";
import "./style.css";
import ls from "local-storage"


export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  };
  
  componentDidMount() {
      document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.dropdown-trigger');
        var instances = M.Dropdown.init(elems, {});
    });
    var user = ls.get('username');
    this.setState({
      username: user
    })
    console.log("ls"+ user)
    
}

render() {

  
    return (
        <div className="navbar">
            <ul id="dropdown1" className="dropdown-content">
                <li>
                <a href="/Members">Browse</a>
                </li>
                {/* <li><a href="#!">Messages</a></li> */}
                <li>
                  <a href="/favorites">Favorites</a>
                </li>
                <li><a href="#!">Settings</a></li>
                <li className="divider"></li>
                <li>
                  <a href="/" 
                  id="logoutID">
                    Logout
                    </a>
                    </li>
            </ul>
            <ul id="dropdown2" className="dropdown-content">
                
                <li style={{ backgroundColor: "black", border: "2px solid #7289da" }}><HeadlineCard /></li>
                
            </ul>
        <nav className="nav-extended">
    <div className="nav-wrapper z-depth-3">
      <a href="/Members" id="nav-title" className="brand-logo center">Welcome {this.state.username}</a>
      <a href="#" data-target="slide-out" className="right sidenav-trigger show-on-large"><i className="material-icons">chat</i></a>
      <ul id="nav-mobile">
      {/* <!-- Dropdown Trigger --> */}
      <a className="dropdown-trigger right" id="Dashboard" data-target="dropdown2">{this.state.username}'s Cocktail of the Day<i className="material-icons left" style={{ color: "yellow"}}>arrow_drop_down</i></a>      

      <li><a className="dropdown-trigger" id="Dashboard" data-target="dropdown1">{this.state.username}'s options<i className="material-icons right" style={{ color: "purple"}}>arrow_drop_down</i></a></li>          
      <li className="hide-on-med-and-down">
        <a href="/Members" id="nav-title">
          Browse
        </a>
      </li>
      {/* <li className="right">
        <MessagingModal />
      </li> */}
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

