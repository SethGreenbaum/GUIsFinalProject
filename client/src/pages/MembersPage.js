import React, { Component } from "react";
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
            <Slider />
            <SecondRow />
            </Wrapper>
            </>
        );
    }
}

export default Members;
