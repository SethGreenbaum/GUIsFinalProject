import React from "react";
import "./style.css";
import logo from "./like-btn.png";
import M from "materialize-css";
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually



function LikeBtn(props) {

  return (
    <span className="like-btn" {...props} role="button" tabIndex="0">
      <img id="like-btn" src={logo} alt="like button" />
    </span>
  );
}
export default LikeBtn;