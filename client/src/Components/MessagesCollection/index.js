import React, { Component, useEffect, useState } from "react";
import { CollectionItem, Collection } from "../CollectionList";
import DeleteBtn from "../DeleteBtn";
import "./style.css";
import messageAPI from "../../utils/API/messageApi";
import API from "../../utils/API/userApi";
import ls from "local-storage";
import M from "materialize-css";
import { Link } from "react-router-dom";


const MessagesCollection = () => {
    // const [state, dispatch] = useStoreContext();
  
    // const getFavorites = () => {
    //   dispatch({ type: LOADING });
    //   dispatch({ type: UPDATE_FAVORITES });
    // };
    const [messages, setMessages] = useState([])
    const removeFromMessages = id => {
      messageAPI.deleteMessage(id)
        .then(() => {
          console.log("remove success!")
        })
        .catch(err => console.log(err));
    };
  
    useEffect(() => {
      let getMessages = () => {
        // dispatch({ type: LOADING });
        let user = ls.get('username');
        API.getUser(user)
          .then(results => {
            setMessages(results.data[0].messages)
            console.log(results)
          })
          .catch(err => console.log(err));
      };
      getMessages();
      console.log(messages)
    }, []);
  
    return (
      <div className="container mb-5 mt-5">
        {messages.length ? (
          <Collection>
            {messages.map(post => (
              <CollectionItem key={post._id} id="post-style">
                  <div className="card small black" >
                      <div className="card-stacked">
                          <div className="card-content" id="card-body">
                              <DeleteBtn onClick={() => removeFromMessages(post._id)} />
                              <h4 style={{ marginTop: "0px", color: "#7289da"}}><span style={{ color: "orange" }}>{post.text}</span> </h4>
                              <br />

                  Sent by: <span style={{ color: "purple", fontWeight: "bold"}}>{post.sender}</span>
                  </div>
                          </div>
                      </div>
              </CollectionItem>
            ))}
          </Collection>
        ) : (
          <h3>No Messages!</h3>
        )}
      </div>
    );
  };
export default MessagesCollection;


