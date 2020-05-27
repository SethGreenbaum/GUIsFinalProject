import React from "react";
import HeadlineCard from "../Components/HeadlineCard/index";
import Wrapper from "../Components/Wrapper/index";
import Slider from "../Components/Slider/index";
import SecondRow from "../Components/SecondRow/SecondRow";
import Nav from "../Components/Nav/index";


const Members = () => {
        return (
            <>
            <Nav />
            <Wrapper>
            <HeadlineCard />
            <Slider />
            <SecondRow />
            </Wrapper>
            </>
        );
    };

export default Members;
