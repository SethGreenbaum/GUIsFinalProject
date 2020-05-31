import React, { Component, useState } from "react";
import "./style.css";
import M from 'materialize-css';
import logo1 from "./slider1.PNG";
import logo2 from "./slider2.PNG";
import logo3 from "./slider3.PNG";
import logo4 from "./cocktailapp.png";
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
                            <img src="https://cdn.vox-cdn.com/thumbor/R5ericK4jly9ilvVmXUvoltuOXc=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/16011059/GVC_UI_50people_laptop_1024x652.png" alt="quarantinees" />
                            <div className="caption right-align">
                                <h3>Check out the blog to share your quarantine stories and shared posts!</h3>
                            </div>
                        </li>
                        <li>
                            <img src={logo4} alt="clips"/>
                            <div className="caption left-align" id="youtubeSlide">
                                <h3>Cocktail Mixtape Integration</h3>
                                <h5 className="light grey-text text-lighten-3">coming soon</h5>
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