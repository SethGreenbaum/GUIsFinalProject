import React, { Component } from 'react';
// import "./style/css";
import HeadlineCard from "../HeadlineCard/index";
import Nav from "../Nav/index";
import Wrapper from "../Wrapper/index";
import Slider from "../Slider/index";
import SecondRow from "../SecondRow/SecondRow";

class MainComponent extends Component {
    render() {
        return (
            <div>
                <Wrapper>
                <Nav />
                <HeadlineCard />
                <Slider />
                <SecondRow />
                </Wrapper>
            </div>
        );
    }
} 

export default MainComponent;