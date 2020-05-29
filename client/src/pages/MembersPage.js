import React, { Component } from "react";

import HeadlineCard from "../Components/HeadlineCard/index";

import Wrapper from "../Components/Wrapper/index";
import Slider from "../Components/Slider/index";
import SecondRow from "../Components/SecondRow/SecondRow";
import Nav from "../Components/Nav/index";
import SideNav from "../Components/SideNav";

class Members extends Component {
    

    render() {
        return (
            <>
            <Nav />
            <Wrapper>
            <SideNav />
            {/* sole purpose of headline card is to create space on top, will fix later  */}
            <HeadlineCard />
            <Slider />
            <SecondRow />
            </Wrapper>
            </>
        );
    }
}

export default Members;
