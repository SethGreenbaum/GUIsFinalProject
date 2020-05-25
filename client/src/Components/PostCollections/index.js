import React, { useEffect } from "react";
import { CollectionItem, Collection } from "../CollectionList";
import DeleteBtn from "../DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_POST, UPDATE_POSTS, LOADING } from "../../utils/actions";
import API from "../../utils/API/postApi";

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
            console.log("posts retreived!")
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
            <CollectionItem key={post._id}>
                <div className="card horizontal black">
                    <div className="card-image">
                        <img src="https://picsum.photos/200" />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
              <Link to={"/posts/" + post._id}>
                <strong style={{color: "#7289da"}}>
                  {post.title} by {post.author}
                </strong>
              </Link>
              <DeleteBtn onClick={() => removePost(post._id)} />
              </div>
              </div>
              </div>
            </CollectionItem>
          ))}
        </Collection>
      ) : (
        <h3>You haven't added any posts yet!</h3>
      )}
      <div className="mt-5">
        <Link to="favorites">View favorites</Link>
      </div>
    </div>
  );
}
export default PostCollections;