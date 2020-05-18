import React from 'react';
import "./style.css";


function TwitchStreams() {
    return (
        <div className="TwitchStreamsBox">
           <div className="col s12 m12 l4">
                <div className="card-header center">
                    <h2 id="TwitchStreamsHeader">Twitch Streams</h2>
                </div>
                <div className="col s6 m6 l12">
                    {/* <div className="card black" id="TwitchStreamsBox">
                        <h6 className="TwitchCardHeader"> hello world!</h6>
                    </div> */}
                    <div className="card">
                        <div className="card-image">
                            <img src="https://cms.qz.com/wp-content/uploads/2019/11/twitch-studio_01_live-experience_1440x900.png?w=1600&h=900&crop=1&strip=all&quality=75" alt="twitch1"/>
                            <span className="card-title">Card Title</span>
                            {/* <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a> */}
                        </div>
                    <div className="card-content">
                        <p>I am very simple card, just for test :)</p>
                    </div>
                    </div>
                </div>
                <div className="col s6 m6 l12">
                <div className="card">
                        <div className="card-image">
                            <img src="https://blog.twitch.tv/assets/uploads/5aa8e90a61e6e5846ab73775fe143b3a.png" alt="twitch2"/>
                            <span className="card-title">Card Title</span>
                            {/* <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a> */}
                        </div>
                    
                    <div className="card-content">
                        <p>I am very simple card, just for test :)</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
            
        );
    }

export default TwitchStreams;