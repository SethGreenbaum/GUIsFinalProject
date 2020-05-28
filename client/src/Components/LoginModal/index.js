import React, { Component } from 'react';
import M from "materialize-css";
import "./style.css";
import LoginForm from "../LoginForm/LoginForm";

export default class LoginModal extends Component {
  constructor(props){
    super(props)
  }
    componentDidMount() {
      document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems, {});
    });
}
    render() {
  
      return (
        <div id="modal2" class="modal">
        <div class="modal-content">
          <LoginForm 
          //this is that prop drilling I was trying to do with update 
          updateUser = {this.props.updateUser}
          />
        </div>
      </div>
            );
          }
        }
