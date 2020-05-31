import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_MESSAGE, LOADING, UPDATE_MESSAGE } from "../../utils/actions";
import API from "../../utils/API/messageApi";
import ls from "local-storage";

function MessagingForm() {
  const usernameRef = useRef();
  const textRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
      e.preventDefault();
      dispatch({ type: LOADING });
      var postData = {
          receiver: usernameRef.current.value,
          sender: ls.get('username'), //need to get from local storage
          text: textRef.current.value
      }
      API.createMessage(postData)
          .then(result => {
              dispatch({
                  type: ADD_MESSAGE,
                  messages: postData
              });
              console.log(state.messages)
          })
          .catch(err => console.log(err));
      usernameRef.current.value = "";
      textRef.current.value = "";
  };

    return (
            <form onSubmit={handleSubmit}>
            <div className="input-field ">
          <input type="text" style={{ color: "white"}} required ref={usernameRef} placeholder="Enter username of Quarantinee"></input>
          <label htmlFor="icon_prefix2">To:</label>
        </div>
        <br />
        <div className="input-field ">
          <input id="icon_prefix2" type="text" style={{ color: "white"}} ref={textRef} placeholder="Enter message here..."></input>
          <label htmlFor="icon_prefix2">Message:</label>
        </div>
        <button className="btn btn-success mt-3 mb-5" disabled={state.loading} onClick={handleSubmit} type="submit">
            Send Message
          </button>
        </form>
    )
};

export default MessagingForm;