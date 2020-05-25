import React from "react";
import HeadlineCard from "../Components/HeadlineCard/index";
import Nav from "../Components/Nav/index";
import Wrapper from "../Components/Wrapper/index";
import Slider from "../Components/Slider/index";
import SecondRow from "../Components/SecondRow/SecondRow";

const Members = () => {
        return (
            <Wrapper>
            <Nav />
            <HeadlineCard />
            <Slider />
            <SecondRow />
            </Wrapper>
        );
    };

export default Members;
