import React from "react";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Footer from "./layout/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/">
          <h1>Sorry, the page you were looking for doesn't exist.</h1>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
