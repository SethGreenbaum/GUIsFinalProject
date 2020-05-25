import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Layout } from './Components/Layout';
// import { Main } from './Components/Main';
import NavLandingPage from "./Components/NavLandingPage/NavLandingComponent";
import Footer from "./Components/Footer";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import Members from "./pages/MembersPage";
import PostDetail from "./pages/PostDetail";
import PostFavorites from "./pages/PostFavorites";
import LandingPage from "./pages/LandingPage";
import { StoreProvider } from "./utils/GlobalState";


function App() {
  return (
    <React.Fragment>
      <Router>
      <StoreProvider>
      {/* <NavLandingPage>
      <Route exact path="/Signup/" component={Signup} />
      <Route exact path="/Login/" component={Login} />
      </NavLandingPage >
      <LandingPage /> */}
      {/* <Route exact path="/Members/" component={Members} /> */}
      <Switch>
      <Route exact path="/" component={Members} />
      <Route exact path="/posts/:id" component={PostDetail} />
      <Route exact path="/favorites" component={PostFavorites} />

      {/* <Members /> */}
        </Switch>
        <Footer />
      </StoreProvider>
      </Router>
  </React.Fragment>

  );
}

export default App;
