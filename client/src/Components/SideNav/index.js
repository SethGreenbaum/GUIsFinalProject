import React, { Component } from 'react';
import MessagingModal from "../MessagingModal";
import MessageCollection from "../MessagesCollection";
import ls from "local-storage";
import M from "materialize-css";


class SideNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
          username: ''
        }
      };

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
      });
      var user = ls.get('username');
    this.setState({
      username: user
    })
    console.log("ls"+ user)
}
    render() {
        return (
            <div id="slide-out" className="collection sidenav center">
                <h4 style={{ color: "#7289da", textAlign: "center", padding: "20px", borderBottomWidth: "0" }}>Message a Quarantinee</h4>
                    <span><MessagingModal /></span>

                <h4 style={{ color: "#7289da", textAlign: "center", padding: "20px" }}>{this.state.username} Messages</h4>
                <span href="#item1" className="col s12 m12 l12"><MessageCollection /></span>

            </div>
        )
    }
}

export default SideNav;