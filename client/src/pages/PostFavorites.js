import React, { useEffect, useState } from "react";
import { CollectionItem, Collection } from "../Components/CollectionList";
import DeleteBtn from "../Components/DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_FAVORITE, LOADING, UPDATE_FAVORITES } from "../utils/actions";
import Nav from "../Components/Nav/index";
import Wrapper from "../Components/Wrapper/index";
import { Container, Row } from "../Components/Grid/index";
import ls from "local-storage";
import API from "../../src/utils/API/userApi";
import likeAPI from "../../src/utils/API/linklikeAPI"


const PostFavorites = () => {
  // const [state, dispatch] = useStoreContext();

  // const getFavorites = () => {
  //   dispatch({ type: LOADING });
  //   dispatch({ type: UPDATE_FAVORITES });
  // };
  const [favorites, setFavorites] = useState([])
  const removeFromFavorites = id => {
    likeAPI.deleteLinklike(id)
      .then(() => {
        console.log("remove success!")
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    let getFavorites = () => {
      // dispatch({ type: LOADING });
      let user = ls.get('username');
      API.getUser(user)
        .then(results => {
          setFavorites(results.data[0].linklikes)
          console.log(results.data[0].linklikes)
        })
        .catch(err => console.log(err));
    };
    getFavorites();
    console.log(favorites)
  }, []);

  return (
    <>
    <Nav />
    <Wrapper id="favorites-style">
    <Container>
      <Row>
        <div className=" col s12 m12 l12">
          <div className="card small horizontal black">
    <div className="container mb-5 mt-5">
      <h1 className="text-center">Here's All of Your Favorite Posts</h1>
      {favorites.length ? (
        <Collection>
          <h3 className="mb-5 mt-5">Click on a post to view in detail</h3>
          {favorites.map(post => (
            <CollectionItem key={post._id}>
                <strong>
                   {post.name}   by {post.username}
                </strong>
              <a href={"/posts/" + post._id}>Post Link</a>
              <a href ={post.link}>Content Link</a>
              <DeleteBtn onClick={() => removeFromFavorites(post._id)} />
            </CollectionItem>
          ))}
        </Collection>
      ) : (
        <h3>You haven't added any favorites yet!</h3>
      )}
      <div className="mt-5">
        <Link to="/Members">Back to home</Link>
      </div>
    </div>
    </div>
    </div>
    </Row>
    </Container>
    </Wrapper>
    </>
  );
};

export default PostFavorites;
