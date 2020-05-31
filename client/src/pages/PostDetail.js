import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Components/Grid";
import API from "../utils/API/postApi";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_POST, ADD_FAVORITE, REMOVE_FAVORITE } from "../utils/actions";
import Nav from "../Components/Nav/index";
import Wrapper from "../Components/Wrapper/index";


const PostDetail = props => {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    API.getPost(props.match.params.id)
      .then(res => dispatch({ type: SET_CURRENT_POST, post: res.data }))
      .catch(err => console.log(err));
  }, []);

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

  return (
    <>
    <Nav />
    <Wrapper id="favorites-style">
    {state.currentPost ? (
      <Container fluid>
      <div className="card black" id="detail-style">

        <Row>
          <Col size="s12 m12 l12">
              <h6 style={{ color: "#7289da", marginTop: "0px" }}>
                q/ <span style={{ color: "orange" }}>{state.currentPost.category}</span> 
                 <span> •</span> <span style={{ color: "darkGrey", fontSize: "12px"}}>
                Posted by: <span style={{ color: "purple", fontWeight: "bold"}}>{state.currentPost.username}</span>
                </span>
                </h6>
                 
                
                <div className="s12 m12 l6 offset-l2">
              {state.favorites.indexOf(state.currentPost) !== -1 ? (
            <button style={{ float: "left"}} className="btn-small btn-danger" onClick={removeFavorite}>
                Remove from Favorites!
            </button>
          ) : (
            <button style={{ float: "left"}} className="btn-small" onClick={addFavorite}>
                ❤️ Add to Favorites
            </button>
          )}
          </div>
              
          </Col>
        </Row>
        <Row>
          <div className="card">
          <Col size="s10 offset-s1 m10 offset-m1 l10 offset-l1">
            <article>
              <div>
                <h3 style={{ textAlign: "center"}}>{state.currentPost.header}</h3>
              <div className="data-img">
              <a heref={state.currentPost.link}>LINK</a>
              <Col size="s12 m12 l12">
                <Row>
                <h2 style={{ display: "block", height: "1px", border: "0", borderTop: "1px solid #ccc", margin: "1em 0", padding: "0"}}></h2>
              <p style={{textAlign: "center"}}>{state.currentPost.body}</p>
              <h2 style={{ display: "block", height: "1px", border: "0", borderTop: "1px solid #ccc", margin: "1em 0", padding: "0"}}></h2>
              
              </Row>
              </Col>
              </div>
              </div>
            </article>
          </Col>
          </div>
        </Row>
        <Row>
          <Col size="m3">
            <Link to="/Members">← Back to Posts</Link>
          </Col>
        </Row>
        </div>

      </Container>
      
    ) : (
      <div>loading...</div>
    )}
    </Wrapper>
    </>
  );
};

export default PostDetail;
