import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Components/Grid";
import API from "../utils/API/postApi";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_POST, ADD_FAVORITE, REMOVE_FAVORITE } from "../utils/actions";
import Nav from "../Components/Nav/index";
import Wrapper from "../Components/Wrapper/index";


const Detail = props => {
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
    <Wrapper id="favorites-style">
    <Nav />
    {state.currentPost ? (
      <Container fluid>
        <Row>
          <Col size="m12">
              <h1>
                {state.currentPost.header} by {state.currentPost.username}
              </h1>
          </Col>
        </Row>
        <Row>
          <Col size="m10 offset-m1">
            <article>
              <h1>Content:</h1>
              <div className="card">
              <p style={{color: "red", backgroundColor: "black"}}>{state.currentPost.body}</p>
              </div>
            </article>
          </Col>
          {state.favorites.indexOf(state.currentPost) !== -1 ? (
            <button className="btn-small btn-danger" onClick={removeFavorite}>
                Remove from Favorites!
            </button>
          ) : (
            <button className="btn-small" onClick={addFavorite}>
                ❤️ Add to Favorites
            </button>
          )}
        </Row>
        <Row>
          <Col size="m2">
            <Link to="/Members">← Back to Posts</Link>
          </Col>
        </Row>
      </Container>
      
    ) : (
      <div>loading...</div>
    )}
    </Wrapper>
    </>
  );
};

export default Detail;
