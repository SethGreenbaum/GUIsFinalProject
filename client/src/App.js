import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Layout } from './Components/Layout';
// import { Main } from './Components/Main';
import Footer from "./Components/Footer";
import Members from "./pages/MembersPage";
import PostDetail from "./pages/PostDetail";
import PostFavorites from "./pages/PostFavorites";
import LandingPage from "./pages/LandingPage";
import { StoreProvider } from "./utils/GlobalState";



function App() {
  return (
    <React.Fragment>
      <Router>
        <>
        <StoreProvider>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/Members" component={Members} />
            <Route exact path="/posts/:id" component={PostDetail} />
            <Route exact path="/favorites" component={PostFavorites} />
          </Switch>
          <Footer />
        </StoreProvider>
        </>
      </Router>
  </React.Fragment>

  );
}

export default App;
