import React, { Component } from 'react';
import M from "materialize-css";
// import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Layout } from './Components/Layout';
// import { Main } from './Components/Main';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Wrapper from "./Components/Wrapper";
import Login from "../src/Components/Login"



function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Wrapper />
      <Footer />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          {/* <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NoMatch} /> */}
        </Switch>
      </Router>
  </React.Fragment>

  );
}

export default App;
