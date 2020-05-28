import React, { useState }from "react";
import "./style.css";
import logo from "./like-btn.png";
import M from "materialize-css";
import ls from "local-storage";
import API from "../../utils/API/linklikeAPI";
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually



function LikeBtn({title}) {
  const [linklikeState, setLinklikeState] = useState({
    username: ls.get('username'),
    link: title
  });
  const handleLike = () =>  {
    console.log('props'+ title)
    var body = linklikeState
    console.log(body)
    API.createLinkLike(body)
    .then(
      console.log("post liked")
    )
    .catch(error => {
      console.log('like error: ')
      console.log(error);
    })
  }
  return (
    <span className="like-btn"  role="button" tabIndex="0">
      <img id="like-btn" src={logo} alt="like button" onClick={()=>handleLike()} />
    </span>
  );
}
export default LikeBtn;