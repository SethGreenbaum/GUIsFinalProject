import React, { Component } from "react";
import M from 'materialize-css';

export default class Slider extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.slider');
            var instances = M.Slider.init(elems, {});
          });
    }
    render() {
        return (
            <div className="container">
                

                <div className="container">
                    <div className="slider">
                        <ul className="slides">
                        <li>
                            <img src="https://cdn.vox-cdn.com/thumbor/hY2D3zvJkmJbkBtgnpMXYZUGl8E=/0x0:7952x5304/1200x675/filters:focal(3340x2016:4612x3288)/cdn.vox-cdn.com/uploads/chorus_image/image/66701094/GettyImages_1127317526.0.jpg" /> 
                            <div className="caption center-align">
                            <h3>This is our big Tagline!</h3>
                            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                            </div>
                        </li>
                        <li>
                            <img src="https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/09/dog-landing-hero-lg.jpg?bust=1536935129&width=1080" />
                            <div className="caption left-align">
                            <h3>Left Aligned Caption</h3>
                            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                            </div>
                        </li>
                        <li>
                            <img src="https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F37a89ce4-f1a8-11e9-94c6-2c5cc7bfde9a.jpg?crop=1999%2C1333%2C0%2C0" />
                            <div className="caption right-align">
                            <h3>Right Aligned Caption</h3>
                            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                            </div>
                        </li>
                        <li>
                            <img src="https://ichef.bbci.co.uk/wwfeatures/live/976_549/images/live/p0/7z/n7/p07zn7p7.jpg" /> 
                            <div className="caption center-align">
                            <h3>This is our big Tagline!</h3>
                            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </div>
            </div>
        )
    }
}