import React, { Component } from "react";
import M from "materialize-css";
import "./style.css";
import SignupForm from "../SignupForm/index";

export default class SignupModal extends Component {
        
    componentDidMount() {
      document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems, {});
    });
}
    render() {
  
      return (
        <div id="modal3" className="modal">
        <div className="modal-content">
          <SignupForm />
        </div>
      </div>
            );
          }
        }