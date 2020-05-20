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
import LandingPage from "./pages/LandingPage";


function App() {
  return (
    <React.Fragment>
      <Router>
      <NavLandingPage>
      <Route exact path="/Signup/" component={Signup} />
      <Route exact path="/Login/" component={Login} />
      </NavLandingPage >
      <LandingPage />
      <Switch>
      <Route exact path="/Members/" component={Members} />
      {/* <Members /> */}
        </Switch>
        <Footer />
      </Router>
  </React.Fragment>

  );
}

export default App;
