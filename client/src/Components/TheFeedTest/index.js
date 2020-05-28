import React from 'react';
import "./style.css";
import CreatePostForm from "../CreatePost/index";
import PostCollections from "../PostCollections/index";
function PostFeed() {
    return (
           <div className="col s12 m12 l6 offset-l1">
           <div className="card-header center">
                       <h2 id="theFeedHeader"></h2>
                       <div>
           </div>
                   </div>
                   <div className="row" id="feedBox">
                       <div className="col s12 m12 l12">
                           <CreatePostForm />
                       </div>
                       <div className="col s12 m12 l12" id="singlePost">
                           <PostCollections />
                       </div>
                   </div>
               </div>
    );
}
console.log()
export default PostFeed;