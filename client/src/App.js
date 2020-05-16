import React from 'react';
// import M from "materialize-css";
// import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Layout } from './Components/Layout';
// import { Main } from './Components/Main';
import Nav from "./Components/Nav/index";
import HeadlineCard from "./Components/HeadlineCard/index";
import Footer from "./Components/Footer";
import Wrapper from "./Components/Wrapper";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import Slider from "./Components/Carousel/index";


function App() {
  return (
    <React.Fragment>
      <Router>
      <Nav>
      <Route exact path="/Signup/" component={Signup} />
      <Route exact path="/Login/" component={Login} />
      </Nav >
      <Wrapper>
      <Route exact path="/Login/" component={Login} />
      <Route exact path="/Signup/" component={Signup} />
      <HeadlineCard />
        <Slider />
        <Switch>
          {/* <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NoMatch} /> */}
        </Switch>
        </Wrapper>
        <Footer />
      </Router>
  </React.Fragment>

  );
}

export default App;
