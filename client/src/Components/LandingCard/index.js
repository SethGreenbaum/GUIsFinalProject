import React from "react";
import "./style.css";

function LandingCard() {
    return (
            <div className="row">
                <div className="col s6 offset-s3 m6 offset-m3 l6 offset-l3">
                <div className="card opacity landingStyle">
        <div className="card-content black-text">
          <span className="card-title center">Welcome to Quarantinee</span>
          <br />
          <p className="landingTag center">An app designed to help get you through the days of
        social distancing while keeping some of your sanity.
        Post your top games, Netflix binges, or simply connect with
        other Quarantinees like yourself.</p>
        <h3 className="covidsite center">Please check out the latest COVID-19 health information <a className="covidinfo"
            href="https://www.cdc.gov/coronavirus/2019-ncov/index.html" target="_blank">here.</a></h3>
        </div>
        <div className="card-action">
        <h3 className="nokidhungry">Consider donating to No Kid Hungry <a className="nokidhungryLink" href="https://www.nokidhungry.org/" target="_blank">here</a>to help give a meal to a kid in need.</h3>        </div>
      </div>
                </div>
            </div>
    );
}

export default LandingCard;