import React, { Component } from 'react';
// import "./style/css";
import HeadlineCard from "../HeadlineCard/index";
import Nav from "../Nav/index";
import Wrapper from "../Wrapper/index";
import Slider from "../Slider/index";
import SecondRow from "../SecondRow/SecondRow";
import { BrowserRouter as Switch } from "react-router-dom";

class MainComponent extends Component {
    render() {
        return (
            <div>
                <Switch>
                <Wrapper>
                <Nav />
                <HeadlineCard />
                <Slider />
                <SecondRow />
                </Wrapper>
                </Switch>
            </div>
        );
    }
} 

export default MainComponent;