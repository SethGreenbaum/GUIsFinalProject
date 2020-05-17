import React from "react";
import "./style.css";
import LoginModal from "../LoginModal/index";



function LoginBtn() {

    return (
        <div className="center">
        <a class="waves-effect waves-light btn modal-trigger" href="#modal2" id="loginBtnStyle">Login</a>

            <LoginModal />
            </div>
            
    );
}

export default LoginBtn;