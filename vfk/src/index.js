import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Login from "./Form/Login";
import Ragister from "./Form/Ragister";
import "./js/plugins";
import "./js/main";

ReactDOM.render(
  <Router>
    <Nav />
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Ragister} />
    </Switch>
    <Footer />
  </Router>,

  document.getElementById("root")
);
