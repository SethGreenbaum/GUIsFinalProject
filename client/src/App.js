import React, { Component } from 'react';
import axios from 'axios'
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Layout } from './Components/Layout';
// import { Main } from './Components/Main';
import Footer from "./Components/Footer";
import LoginForm from "./Components/LoginForm";
import SignupForm from  "./Components/SignupForm";
import Members from "./pages/MembersPage";
import PostDetail from "./pages/PostDetail";
import PostFavorites from "./pages/PostFavorites";
import LandingPage from "./pages/LandingPage";
import { StoreProvider } from "./utils/GlobalState";


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <React.Fragment>
      <Router>
        <>
        <StoreProvider>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/Members" component={Members} />
            <Route
                exact path="/Signup/"
                component={() =>
                  <SignupForm />} />

              <Route
                exact path="/Login/"
                component={() =>
                  <LoginForm
                    updateUser={this.updateUser} />} />
            <Route exact path="/posts/:id" component={PostDetail} />
            <Route exact path="/favorites" component={PostFavorites} />
          </Switch>
          <Footer />
        </StoreProvider>
        </>
      </Router>
    </React.Fragment>
      // <div className="App">
   
      //   <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
      //   {/* greet user if logged in: */}
      //   {this.state.loggedIn &&
      //     <p>Join the party, {this.state.username}!</p>
      //   }
      //   {/* Routes to different components */}
      //   <Route
      //     exact path="/"
      //     component={Home} />
      //   <Route
      //     path="/login"
      //     render={() =>
      //       <LoginForm
      //         updateUser={this.updateUser}
      //       />}
      //   />
      //   <Route
      //     path="/signup"
      //     render={() =>
      //       <Signup/>}
      //   />

      // </div>
    );
  }
}

export default App;


// function App() {
//   return (
//     <React.Fragment>
//       <Router>
//         <>
//         <StoreProvider>
//           <Switch>
//             <Route exact path="/" component={LandingPage} />
//             <Route exact path="/Members" component={Members} />
//             <Route
//                 path="/Signup/"
//                 render={() =>
//                   <SignupForm />} />

//               <Route
//                 path="/Login/"
//                 render={() =>
//                   <LoginForm
//                     updateUser={this.updateUser} />} />
//             <Route exact path="/posts/:id" component={PostDetail} />
//             <Route exact path="/favorites" component={PostFavorites} />
//           </Switch>
//           <Footer />
//         </StoreProvider>
//         </>
//       </Router>
//   </React.Fragment>

//   );
// }

// export default App;



// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       loggedIn: false,
//       username: null
//     }

//     this.getUser = this.getUser.bind(this)
//     this.componentDidMount = this.componentDidMount.bind(this)
//     this.updateUser = this.updateUser.bind(this)
//   }

//   componentDidMount() {
//     this.getUser()
//   }

//   updateUser(userObject) {
//     this.setState(userObject)
//   }

//   getUser() {
//     axios.get('/user/').then(response => {
//       console.log('Get user response: ')
//       console.log(response.data)
//       if (response.data.user) {
//         console.log('Get User: There is a user saved in the server session: ')

//         this.setState({
//           loggedIn: true,
//           username: response.data.user.username
//         })
//       } else {
//         console.log('Get user: no user');
//         this.setState({
//           loggedIn: false,
//           username: null
//         })
//       }
//     })
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <Router>

//           <StoreProvider>
//             <NavLandingPage updateUser={this.updateUser} loggedIn={this.state.loggedIn}>

//               {/* Routes to components */}
//               <Route
//                 exact path="/"
//                 component={LandingPage} />

//               <Route
//                 path="/Signup/"
//                 render={() =>
//                   <SignupForm />} />

//               <Route
//                 path="/Login/"
//                 render={() =>
//                   <LoginForm
//                     updateUser={this.updateUser} />} />

//             </NavLandingPage>
//             <LandingPage />

//             {/* <Route exact path="/Members/" component={Members} /> */}
//             <Switch>
//               <Route exact path="/Members" component={Members} />
//               <Route exact path="/posts/:id" component={PostDetail} />
//               <Route exact path="/favorites" component={PostFavorites} />

//               {/* <Members /> */}
//             </Switch>
//             <Footer />
//           </StoreProvider>
//         </Router>
//       </React.Fragment>

//     );
//   }
// }