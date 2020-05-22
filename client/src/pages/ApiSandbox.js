// import React, { useEffect, useState } from "react";
// import Jumbotron from "../TestComp/Jumbotron";
// import DeleteBtn from "../TestComp/DeleteBtn";
// import API from "../utils/API/postApi";
// import { Col, Row, Container } from "../TestComp/Grid";
// import { List, ListItem } from "../TestComp/List";
// import { Input, TextArea, FormBtn } from "../TestComp/Form";

// function Posts() {
//   // Setting our component's initial state
//   const [posts, setPosts] = useState([])
//   const [formObject, setFormObject] = useState({
//     username: "",
//     header: "",
//     body: "",
//     link: "",
//     category: ""
//   })

//   // Load all books and store them with setBooks
//   useEffect(() => {
//     loadPosts()
//   }, [])

//   // Loads all books and sets them to books
//   function loadPosts() {
//     API.getPosts()
//       .then(res => 
//         setPosts(res.data)
//       )
//       .catch(err => console.log(err));
//   };

//   // Deletes a book from the database with a given id, then reloads books from the db
//   function deletePost(id) {
//     API.deletePost(id)
//       .then(res => loadPosts())
//       .catch(err => console.log(err));
//   }

//   // Handles updating component state when the user types into the input field
//   function handleInputChange(event) {
//     const { name, value } = event.target;
//     setFormObject({...formObject, [name]: value})
//   };

//   // When the form is submitted, use the API.saveBook method to save the book data
//   // Then reload books from the database
//   function handleFormSubmit(event) {
//     event.preventDefault();
//     if (formObject.header && formObject.body) {
//       API.createPost({
//         username: formObject.username,
//         header: formObject.header,
//         body: formObject.body,
//         link: formObject.link,
//         category: formObject.category
//       })
//         .then(() => setFormObject({
//             username: "",
//             header: "",
//             body: "",
//             link: "",
//             category: ""
//         }))
//         .then(() => loadPosts())
//         .catch(err => console.log(err));
//     }
//   };

//     return (
//       <Container fluid>
//         <Row>
//           <Col size="md-6">
//             <Jumbotron>
//               <h1>Posts</h1>
//             </Jumbotron>
//             <form>
//               <Input
//                 onChange={handleInputChange}
//                 name="username"
//                 placeholder="username"
//                 value={formObject.username}
//               />
//               <Input
//                 onChange={handleInputChange}
//                 name="header"
//                 placeholder="header"
//                 value={formObject.header}
//               />
//               <Input
//                 onChange={handleInputChange}
//                 name="link"
//                 placeholder="link"
//                 value={formObject.link}
//               />
//               <TextArea
//                 onChange={handleInputChange}
//                 name="body"
//                 placeholder="body"
//                 value={formObject.body}
//               />
//               <Input
//                 onChange={handleInputChange}
//                 name="category"
//                 placeholder="category"
//                 value={formObject.category}
//               />
//               <FormBtn
//                 disabled={!(formObject.title && formObject.body)}
//                 onClick={handleFormSubmit}
//               >
//                 Submit Book
//               </FormBtn>
//             </form>
//           </Col>
//           <Col size="md-6 sm-12">
//             <Jumbotron>
//               <h1>Feed</h1>
//             </Jumbotron>
//             {posts.length ? (
//               <List>
//                 {posts.map(post => {
//                   return (
//                     <ListItem key={post._id}>
//                       <a href={"/posts/" + post._id}>
//                         <strong>
//                           {post.header} by {post.username} {post.body} {post.link} {post.category}
//                         </strong>
//                       </a>
//                       <DeleteBtn onClick={() => deletePost(post._id)} />
//                     </ListItem>
//                   );
//                 })}
//               </List>
//             ) : (
//               <h3>No Results to Display</h3>
//             )}
//           </Col>
//         </Row>
//       </Container>
//     );
//   }


// export default Posts;