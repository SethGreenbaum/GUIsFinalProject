import React from "react";
import "./style.css";
import PostModal from "../PostModal/PostModal";



function PostBtnModal() {

    return (
        <div className="center">
        <a class="waves-effect waves-light btn modal-trigger" href="#modal1" id="postBtnStyle">Add a post!</a>

            <PostModal />
            </div>
            
    );
}

export default PostBtnModal;