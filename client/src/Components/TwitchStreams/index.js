// import React from 'react';
// import "./style.css";
import { CollectionItem, Collection } from "../CollectionList";
import React, { Component } from "react";
import M from "materialize-css";
import "./style.css";
// import SignupForm from "../SignupForm/index";
import API from "../../utils/externalAPI/twitchApi"
// import ls from "local-storage"
import { Link } from "react-router-dom";

export default class TwitchStreams extends Component {
    constructor() {
        super()
        this.state = {
          data: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
      };

    componentDidMount() {
        API.getAuthorization();
        API.getTwitch()
        .then(response => {
            let twitchData = response.data.data
            console.log(response)
            console.log(response.data.data)
            this.setState({data: twitchData})
            console.log(this.state.data)
        })
        // this.setState({data: [response]})
    }
    handleSubmit(){
        API.getToken()
    }
    render() {
  
      return (
        <div className="TwitchStreamsBox">

        <div className="col s12 m12 l4">
            <div className="row s12 m12 l4">
        <button className="auth btn" onClick={this.handleSubmit} style={{ position: "relative", left: "35%", marginBottom: "20px" }}>LOAD TWITCH STREAMS</button>
            </div>
             <div className="card-header center">
                 <h2 id="TwitchStreamsHeader">Twitch Streams</h2>
             </div>
             <Collection>
             {this.state.data.map(function(twitch) {
                 return (
             <CollectionItem key={twitch.id}>
             <div className="col s12 m12 l12" >
                 <div className="card">
                     <div className="card-image">
                     <a href={"http://www.twitch.tv/" + twitch.user_name}><img src={twitch.thumbnail_url.replace("-{width}x{height}", "")} alt="twitch1"/></a>
                         <span className="card-title">{twitch.title}</span>

                     </div>
                 </div>
             </div>
             <a href={"http://www.twitch.tv/" + twitch.user_name}>
                        <strong style={{color: "#7289da"}}>
                         Link to Stream </strong>
            </a>
             </CollectionItem>
                 )
             })}
             </Collection>
         </div>
     </div>
            );
          }
        }

// function TwitchStreams() {

//     return (
//         <div className="TwitchStreamsBox">
//            <div className="col s12 m12 l4">
//                 <div className="card-header center">
//                     <h2 id="TwitchStreamsHeader">Twitch Streams</h2>
//                 </div>
//                 <div className="col s6 m6 l12">
//                     {/* <div className="card black" id="TwitchStreamsBox">
//                         <h6 className="TwitchCardHeader"> hello world!</h6>
//                     </div> */}
//                     <div className="card">
//                         <div className="card-image">
//                             <img src="https://cms.qz.com/wp-content/uploads/2019/11/twitch-studio_01_live-experience_1440x900.png?w=1600&h=900&crop=1&strip=all&quality=75" alt="twitch1"/>
//                             <span className="card-title">Card Title</span>
//                             {/* <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a> */}
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col s6 m6 l12">
//                 <div className="card">
//                         <div className="card-image">
//                             <img src="https://blog.twitch.tv/assets/uploads/5aa8e90a61e6e5846ab73775fe143b3a.png" alt="twitch2"/>
//                             <span className="card-title">Card Title</span>
//                             {/* <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a> */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
            
//         );
//     }

// export default TwitchStreams;