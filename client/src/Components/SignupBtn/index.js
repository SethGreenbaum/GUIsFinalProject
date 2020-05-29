import React from "react";
import "./style.css";
import SignupModal from "../SignupModal/index";



function SignupBtn() {

    return (
        <div className="center">
        <a className="waves-effect waves-light btn modal-trigger" href="#modal3" id="signupBtnStyle">Signup</a>

            <SignupModal />
            </div>
            
    );
}

export default SignupBtn;