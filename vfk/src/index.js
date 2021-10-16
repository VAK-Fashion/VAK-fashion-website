import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./App";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
ReactDOM.render(
  <Router>
    <Nav />
    <Switch>
      <Route path="/" exact component={App} />
    </Switch>
    <Footer />
  </Router>,

  document.getElementById("root")
);
