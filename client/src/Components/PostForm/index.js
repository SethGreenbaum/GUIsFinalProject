import React from 'react';
import "./style.css";

function PostForm() {
    return (
        <div id="postForm">
        <h3 className="text-center">Add to our live feed, say anything!</h3>
        <h5 className="text-center">Share your at home quarantine adventures!</h5>
        <form className="create-form text-center">
          <div className="form-group" id="authorId">
            <label htmlFor="auth">Title:</label>
            <input type="text" id="auth" className="header" name="author" />
          </div>
          <div className="form-group" id="editId">
            <label htmlFor="quo">Edit Post:</label>
            <textarea id="quo" className="body" name="quote" rows={8} cols={40} defaultValue={""} />
          </div>
          <div className="form-group" id="editId">
            <label htmlFor="quo">Category:</label>
            <textarea id="qua" className="category" name="quote" rows={8} cols={40} defaultValue={""} />
          </div>
          <div className="form-group" id="editId">
            <label htmlFor="quo">Link:</label>
            <textarea id="que" className="link" name="quote" rows={8} cols={40} defaultValue={""} />
          </div>
          <a className="button post" type="submit" id="postBtn">Add Post</a>
        </form>
      </div>
    )
}

export default PostForm;