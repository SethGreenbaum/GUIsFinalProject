import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_POST, LOADING } from "../../utils/actions";
import API from "../../utils/API/postApi";


function CreatePostForm() {
    const usernameRef = useRef();
    const bodyRef = useRef();
    const headerRef = useRef();
    const categoryRef = useRef();
    const linkRef = useRef();
    const [state, dispatch] = useStoreContext();

    const handleSubmit = e => {
      e.preventDefault();
      dispatch({ type: LOADING });
      var postData = {
        header: headerRef.current.value,
        username: usernameRef.current.value,
        body: bodyRef.current.value,
        link: linkRef.current.value,
        category: categoryRef.current.value,
      }
      API.createPost(postData)
        .then(result => {
          dispatch({
            type: ADD_POST,
            post: result.data
          });
        })
        .catch(err => console.log(err));
      headerRef.current.value = "";
      bodyRef.current.value = "";
      usernameRef.current.value = "";
      linkRef.current.value = "";
      categoryRef.current.value = "";
    };

    return (
      <div>
        <h1>Create a blog post</h1>
        <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
          <input className="form-control mb-5" required ref={headerRef} placeholder="Header" />
          <textarea className="form-control mb-5" required ref={bodyRef} placeholder="Body" />
          <input className="form-control mb-5" ref={usernameRef} placeholder="username" />
          <input className="form-control mb-5" required ref={linkRef} placeholder="Link" />
          <input className="form-control mb-5" required ref={categoryRef} placeholder="Category" />
          <button className="btn btn-success mt-3 mb-5" disabled={state.loading}  type="submit">
            Save Post
          </button>
        </form>
      </div>
    );
  }
  export default CreatePostForm;
  