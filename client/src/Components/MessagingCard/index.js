import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_MESSAGE, LOADING, UPDATE_MESSAGE } from "../../utils/actions";
import API from "../../utils/API/messageApi";
import ls from "local-storage";

function MessagingCard() {
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
        <div className="card black">
        <div className="row">
            <div className="col s10">
        <div className="card" style={{ color: "white", backgroundColor: "black" }}>
            <form className="col s12" onSubmit={handleSubmit}>
            <div className="input-field col s10 offset-s2 m10 offset-m2 l10 offset-l2">
          <i className="material-icons prefix">mode_edit</i>
          <input id="icon_prefix2" className="validate" style={{ color: "white"}} required ref={usernameRef} placeholder="Enter username of Quarantinee"></input>
          <label htmlFor="icon_prefix2">To:</label>
        </div>
        <br />
        <div className="input-field col s10 offset-s2 m10 offset-m2 l10 offset-l2">
          <input id="icon_prefix2" type="text" style={{ color: "white"}} ref={textRef} placeholder="Enter message here..."></input>
          <label htmlFor="icon_prefix2">Message:</label>
        </div>
        <button className="btn btn-success mt-3 mb-5" disabled={state.loading} onClick={handleSubmit} type="submit">
            Send Message
          </button>
        </form>
        </div>
        </div>
        </div>
        </div>
    )
};

export default MessagingCard;