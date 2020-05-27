import React, { useEffect } from "react";
import { CollectionItem, Collection } from "../CollectionList";
import DeleteBtn from "../DeleteBtn";
import { Link } from "react-router-dom";
import "./style.css";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_POST, UPDATE_POSTS, LOADING } from "../../utils/actions";
import API from "../../utils/API/postApi";
import { STATES } from "mongoose";

function PostCollections() {
  const [state, dispatch] = useStoreContext();

  const removePost = id => {
    API.deletePost(id)
      .then(() => {
        dispatch({
          type: REMOVE_POST,
          _id: id
        });
        console.log("remove success!")
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    const getPosts = () => {
        dispatch({ type: LOADING });
        API.getPosts()
          .then(results => {
            dispatch({
              type: UPDATE_POSTS,
              posts: results.data
            });
            console.log("posts retreived!" + JSON.stringify(results))
          })
          .catch(err => console.log(err));
      };
    getPosts();
  }, []);
  
  return (
    <div>
      <h1>All Blog Posts</h1>
      <h3 className="mb-5 mt-5">Click on a post to view</h3>
      {state.posts.length ? (
        <Collection>
          {state.posts.map(post => ( 
            <CollectionItem key={post._id} id="post-style">
                <div className="card small horizontal black" id="image-style">
                    <div className="card-image waves-effect waves-block waves-light" id="main-overlay">
                        <img className="activator" src={post.link} id="image" />
                        <div className="overlay">
                          <div className="text-overlay">Click image for body preview</div>
                        </div>
                        </div>
                        <div className="card-stacked">
                            <div className="card-content" id="card-body">
                            {post.header}
                            <br /> 
                            <br />
                              {post.body}
                              <br />
                              <br />
              <div className="card-action">
              <Link to={"/posts/" + post._id}>
                <strong style={{color: "#7289da"}}>
                  by u/{post.username}
                </strong>
              </Link>
              <br />
              <br />
              <a href={post.link} target="_blank">
                <p href={post.link}>Link</p>
              </a>
              <DeleteBtn onClick={() => removePost(post._id)} />
              </div>
              </div>
              </div>
              <div className="card-reveal black">
                <span className="card-title" style={{ color: "white"}}>{post.header}<i className="material-icons right">close</i>
                <br />
                <br />
                <p>{post.body}</p>
                 u/ <strong style={{ color: "orange" }}>{post.username}</strong></span>
              </div>
              </div>
            </CollectionItem>
          ))}
        </Collection>
      ) : (
        <div>
        <h3>You haven't added any posts yet!</h3>
        <div className="mt-5">
        <Link to="favorites">View favorites</Link>
      </div>
      </div>
        
      )}
      
    </div>
  );
}
export default PostCollections;