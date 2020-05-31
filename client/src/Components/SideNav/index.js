import React, { Component } from 'react';
import MessagingCard from "../MessagingForm/index";
import MessagingForm from "../MessagingForm/index";
import MessageCollection from "../MessagesCollection";
import ls from "local-storage";
import M from "materialize-css";
import "./style.css";


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
                    <div id="messaging-card" style={{ marginLeft: "25px", marginRight: "25px", backgroundColor: "black", padding: "10px" }}>
                      <MessagingForm />
                      </div>

                <h4 style={{ color: "#7289da", textAlign: "center", padding: "20px" }}>{this.state.username}'s incoming Messages</h4>
                <div className="col s12 m12 l12 messages-div" style={{  paddingBottom: "150px"}}>
                <span href="#item1" className="col s12 m12 l12"><MessageCollection /></span>
                </div>
                
                
            </div>
            
        )
    }
}

export default SideNav;