import React, { Component } from "react";
import M from "materialize-css";
import PostForm from "../PostForm/index";
import "./style.css";


export default class PostModal extends Component {
    
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {});
        });
    }
    render() {
        return (

  <div id="modal1" class="modal">
    <div class="modal-content">
      <PostForm />
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat" id="addPost">Close</a>
    </div>
  </div>
        );
    }
}