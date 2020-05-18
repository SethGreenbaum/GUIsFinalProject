import React from 'react';
// import "./style.css";
import TheFeed from "../TheFeed/index";
import TwitchStreams from "../TwitchStreams/index";

function SecondRow() {
    return (
       <div className="row">
           <TheFeed />
           <TwitchStreams />
       </div> 
    );
}

export default SecondRow;