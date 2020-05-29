import React from "react";
import "./style.css";
import LoginModal from "../LoginModal/index";



function LoginBtn({updateUser}) {

    return (
        <div className="center">
        <a className="waves-effect waves-light btn modal-trigger" href="#modal2" id="loginBtnStyle">Login</a>

            <LoginModal 
            //This is als where I tried to prop drill
            updateUser={updateUser}
            />
            </div>
            
    );
}

export default LoginBtn;