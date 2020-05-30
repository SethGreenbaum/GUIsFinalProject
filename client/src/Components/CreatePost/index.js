import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_POST, LOADING, UPDATE_POSTS } from "../../utils/actions";
import API from "../../utils/API/postApi";


function CreatePostForm() {
    const usernameRef = useRef();
    const bodyRef = useRef();
    const headerRef = useRef();
    const categoryRef = useRef();
    const [state, dispatch] = useStoreContext();

    const handleSubmit = e => {
      e.preventDefault();
      dispatch({ type: LOADING });
      var postData = {
        header: headerRef.current.value,
        username: usernameRef.current.value,
        body: bodyRef.current.value,
        category: categoryRef.current.value,
      }
      API.createPost(postData)
        .then(result => {
          dispatch({
            type: ADD_POST,
            post: result.data
          });
          // headerRef.current.value = "";
          // bodyRef.current.value = "";
          // usernameRef.current.value = "";
          // categoryRef.current.value = "";
        })
        .then(
          API.getPosts()
          .then(results => {
            dispatch({
              type: UPDATE_POSTS,
              posts: results.data
            });
            console.log("posts retreived!" + JSON.stringify(results))
          })
        )
        .catch(err => console.log(err));
      headerRef.current.value = "";
      bodyRef.current.value = "";
      usernameRef.current.value = "";
      categoryRef.current.value = "";
    };


    return (
      <div className="card black" style={{ borderRadius: "5px", border: "2px solid #7289da", padding: "10px" }}>
        <h1 style={{ color: "#7289da", textAlign: "center"}}>Create a blog post</h1>
        <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
          <input style={{ color: "white"}} className="form-control mb-5" required ref={headerRef} placeholder="Header" />
          <textarea style={{ color: "white"}} className="form-control mb-5" required ref={bodyRef} placeholder="Body" />
          <input style={{ color: "white"}} className="form-control mb-5" ref={usernameRef} placeholder="username" />
          <input style={{ color: "white"}} className="form-control mb-5" required ref={categoryRef} placeholder="Category" />
          <button className="btn btn-success mt-3 mb-5" disabled={state.loading}  type="submit">
            Save Post
          </button>
        </form>
      </div>
    );
  }
  export default CreatePostForm;
  