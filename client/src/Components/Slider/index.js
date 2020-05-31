import React, { Component, useState } from "react";
import "./style.css";
import M from 'materialize-css';
import logo1 from "./slider1.PNG";
import logo2 from "./slider2.PNG";
import logo3 from "./slider3.PNG";
import API from "../../utils/externalAPI/cocktailApi"


export default class Slider extends Component {
    constructor() {
        super()
        this.state = {
          data: []
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    };

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.slider');
            var instances = M.Slider.init(elems, {});
          });
    }

    render() {
        return (
            <div>
                

                <div className="container" style={{ position: "relative", top: "10px"}}>
                    <div className="slider">
                        <ul className="slides">
                        <li>
                            <img src={logo2} alt="clips"/>
                            <div className="caption left-align" id="youtubeSlide">
                                <h3>Explore top posts from Reddit, clips from Youtube, Twitch, or any other platform all in one place</h3>
                                {/* <h5 className="light grey-text text-lighten-3"></h5> */}
                            </div>
                        </li>
                        <li>
                            <img src={logo3} alt="cooking"/>
                            <div className="caption left-align">
                                <h3>Share your Quarantinee recipies</h3>
                                <h5 className="light grey-text text-lighten-3">Delicacy on a budget</h5>
                            </div>
                        </li>
                        <li>
                            <img src="https://cdn57.androidauthority.net/wp-content/uploads/2018/12/Discord-best-chat-room-apps-for-android.jpg" alt="chat"/> 
                            <div className="caption center-align" id="chatroomSlide">
                                <h3>Update 0.9: Campfire Chatroom</h3>
                                <h5 className="light grey-text text-lighten-3">An outlet to speak live with other quarantinees</h5>
                            </div>
                        </li>
                        <li>
                            <img src={logo1} alt="streaming"/> 
                            <div className="caption center-align">
                                <h3>Update 1.1: Quarantinee Streaming</h3>
                                <h5 className="light grey-text text-lighten-3">coming soon</h5>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </div>
            </div>
        )
    }
}