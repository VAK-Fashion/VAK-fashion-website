import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/js/bootstrap.min.js";
import "./glodel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.min.js";
import App from "./Home/App";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import Header from "./components/Header";
import "lazysizes";

import "lazysizes/plugins/parent-fit/ls.parent-fit";
import "wow.js/css/libs/animate.css";
import "wow.js/dist/wow.min.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import login from "./Form/login";
import "./assets/css/bootstrap.min.css";
import "./assets/css/plugins.css";
import "./assets/css/responsive.css";
import "./assets/css/style.css";
import About from "./page/About";
import NotFound from "./page/NotFound";
import Wishlist from "./page/Wishlist";
import contactUs from "./page/contactUs";
import Product from "./page/ProductView";
import Shop from "./page/Shop";
import Checkout from "./page/Checkout";
const Routes = () => {
    React.useEffect(() => {
        $("#site-scroll").on("click", function () {
            $("html, body").animate({ scrollTop: 0 }, 1000);
            return false;
        });
        $(window).scroll(function (e) {
            var kk: any = $(window).scrollTop()
            if (kk > 300) {
                $("#site-scroll").fadeIn();
            } else {
                $("#site-scroll").fadeOut();
            }
        });
    }, [])
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/login" component={login} />
                <Route exact path="/About" component={About} />
                <Route exact path="/wishlist" component={Wishlist} />
                <Route exact path="/contactUs" component={contactUs} />
                <Route exact path="/Shop" component={Shop} />
                <Route exact path='/product/:id' component={Product} />
                <Route exact path='/checkout' component={Checkout} />
                <Route path="*" component={NotFound} />
            </Switch>
            <Footer />
            <span id="site-scroll" className="colorpink"  ><i className="icon anm anm-angle-up-r"></i></span>
        </Router>
    )
}
ReactDOM.render(
    <Routes />,
    document.getElementById("app")
);
