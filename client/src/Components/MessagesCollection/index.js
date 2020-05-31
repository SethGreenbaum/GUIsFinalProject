import React, { useEffect, useState } from "react";
import { CollectionItem, Collection } from "../CollectionList";
import DeleteBtn from "../DeleteBtn";
import "./style.css";
import messageAPI from "../../utils/API/messageApi";
import API from "../../utils/API/userApi";
import ls from "local-storage";
import { REMOVE_MESSAGE } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";




const MessagesCollection = () => {
    const dispatch = useStoreContext();
    // const [state, dispatch] = useStoreContext();
  
    // const getFavorites = () => {
    //   dispatch({ type: LOADING });
    //   dispatch({ type: UPDATE_FAVORITES });
    // };
    const [messages, setMessages] = useState([])
    const removeFromMessages = id => {
      messageAPI.deleteMessage(id)
        .then(() => {
            dispatch({
                type: REMOVE_MESSAGE,
                _id: id
            });
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
              <CollectionItem key={post._id}>
                  <div id="messages-collection" style={{ height: "100%", padding: "10px" }} >
                      <div className="card-stacked">
                          <div className="card-content" id="card-body">
                              <DeleteBtn onClick={() => removeFromMessages(post._id)} style={{ paddingLeft: "20px" }}/>
                              <h6 style={{ marginTop: "0px", color: "#7289da"}}><span style={{ color: "white" }}>{post.text}</span> </h6>
                            <span style={{ fontSize: "13px" }}>Sent by: </span><span style={{ color: "purple", fontWeight: "bold", fontSize: "15px"}}>{post.sender}</span>
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


