import React from 'react';
// import "./style.css";
// import TheFeed from "../TheFeed/index";
import { Row } from "../Grid";

import TheFeedTest from "../TheFeedTest/index";
import TwitchStreams from "../TwitchStreams/index";

function SecondRow() {
    return (
       <Row>
           <TheFeedTest />
           <TwitchStreams />
       </Row> 
    );
}

export default SecondRow;