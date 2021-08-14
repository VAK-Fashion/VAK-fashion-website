import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/globel.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Nav from "./components/Nav";
import TopP from "./topprodect";
const Routes = () => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
      #app{
        width:100%; height:100%
      }
      `,
        }}
      ></style>
      <Nav />
      <App />
      <TopP />
    </>
  );
};
ReactDOM.render(<Routes />, document.getElementById("app"));
