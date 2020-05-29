import React, { Component } from "react";
import { CollectionItem, Collection } from "../CollectionList";
import DeleteBtn from "../DeleteBtn";
import "./style.css";
import messageAPI from "../../utils/API/messageApi";
import ls from "local-storage";
import M from "materialize-css";

class MessagesCollection extends Component {

    constructor(props) {
        super(props);
        this.state = {
          sender: '',
          reciever: '',
          text: ''
        }
      };
//       componentDidMount() {
//         document.addEventListener('DOMContentLoaded', function() {
//         let sidenav = document.querySelector('#slide-out');
//         M.Sidenav.init(sidenav, {});
//       });
//       var user = ls.get('username');
//     this.setState({
//       username: user
//     })
//     console.log("ls"+ user)
// }

    render() {
  return (
        <div class="row">
            <div class="col s12 m10 offset-m1">
                <div class="card blue-grey darken-1" id="messages-collection">
                    <div class="card-content white-text">
                    <span class="card-title">{this.state.sender}</span>
                    <p>{this.state.text}</p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default MessagesCollection;