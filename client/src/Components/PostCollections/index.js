import React, { useEffect } from "react";
import { CollectionItem, Collection } from "../CollectionList";
import DeleteBtn from "../DeleteBtn";
import LikeBtn from "../LikeBtn";
import { Link } from "react-router-dom";
import "./style.css";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_POST, REMOVE_FAVORITE, UPDATE_POSTS, ADD_FAVORITE, LOADING } from "../../utils/actions";
import postAPI from "../../utils/API/postApi";

function PostCollections() {
  const [state, dispatch] = useStoreContext();

  const removePost = id => {
    postAPI.deletePost(id)
      .then(() => {
        dispatch({
          type: REMOVE_POST,
          _id: id
        });
        console.log("remove success!")
      })
      .catch(err => console.log(err));
  };

  const addFavorite = () => {
    dispatch({
      type: ADD_FAVORITE,
      post: state.currentPost
    });
  };

  const removeFavorite = () => {
    dispatch({
      type: REMOVE_FAVORITE,
      _id: state.currentPost._id
    });
  };

  // const likePost = id => {
  //   likeAPI.createLike(id)
  //   .then(() => {
  //     dispatch({
  //       type: REMOVE_LIKE,
  //       _id: id
  //     });
  //     console.log("remove like success!")
  //   })
  //   .catch(err => console.log(err));
  // }

  useEffect(() => {
    let getPosts = () => {
        dispatch({ type: LOADING });
        postAPI.getPosts()
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
      <h1 style={{ textAlign: "center", color: "#7289da"}}>The Feed</h1>
      {state.posts.length ? (
        <Collection>
          {state.posts.map(post => ( 
            <CollectionItem key={post._id} id="post-style">
                <div className="card small black" id="image-style">
                        <div className="card-stacked">
                            <div className="card-content" id="card-body">
                            <DeleteBtn onClick={() => removePost(post._id)} />

                            <h4 style={{ marginTop: "0px", color: "#7289da"}}>{post.header}</h4>
                            <br />
                            q/ <span style={{ color: "orange" }}>{post.username}</span> 
                            <br />
                 <span> •</span> <span style={{ color: "darkGrey", fontSize: "12px"}}>
                Posted by: <span style={{ color: "purple", fontWeight: "bold"}}>{post.username}</span>
                </span> 
                              
              <div className="card-action">
              <Link to={"/posts/" + post._id}>
                <strong style={{color: "#7289da"}}>
                Click here to open post </strong>
              </Link>
              <br />
              <br />
              <a href={post.link} target="_blank">
                <p href={post.link}>Link</p>
              </a>
              {state.favorites.indexOf(state.currentPost) !== -1 ? (
                <LikeBtn onClick={() => removeFavorite(post._id)} style={{ opacity: "0.5"}} 
                />
              ) : (
                <LikeBtn onClick={() => addFavorite(post._id)} 
                title={post.link}
                />
              )}
              
              
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
        <Link to="/favorites">View favorites</Link>
      </div>
      </div>
        
      )}
      
    </div>
  );
}
export default PostCollections;