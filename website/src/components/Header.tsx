import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.svg";

import $ from "jquery";
const Header = () => {
    const l = useLocation();
    const [open, setOpen] = React.useState(false);
    React.useEffect(() => {
        var selectors = {
            body: "body",
            sitenav: "#siteNav",
            navLinks: "#siteNav .lvl1 > a",
            menuToggle: ".js-mobile-nav-toggle",
            mobilenav: ".mobile-nav-wrapper",
            menuLinks: "#MobileNav .anm",
            closemenu: ".closemobileMenu",
        };

        $(selectors.navLinks).each(function () {
            if ($(this).attr("href") == window.location.pathname)
                $(this).addClass("active");
        });

        $(selectors.menuToggle).on("click", function () {
            $(selectors.mobilenav).toggleClass("active");
            $(selectors.body).toggleClass("menuOn");
            $(selectors.menuToggle).toggleClass("mobile-nav--open mobile-nav--close");
        });

        $(selectors.closemenu).on("click", function () {
            $(selectors.mobilenav).toggleClass("active");
            $(selectors.body).toggleClass("menuOn");
            $(selectors.menuToggle).toggleClass("mobile-nav--open mobile-nav--close");
        });
        $("body").on("click", function (event) {
            var $target = $(event.target);
            if (
                !$target.parents().is(selectors.mobilenav) &&
                !$target.parents().is(selectors.menuToggle) &&
                !$target.is(selectors.menuToggle)
            ) {
                $(selectors.mobilenav).removeClass("active");
                $(selectors.body).removeClass("menuOn");
                $(selectors.menuToggle)
                    .removeClass("mobile-nav--close")
                    .addClass("mobile-nav--open");
            }
        });
        $(selectors.menuLinks).on("click", function (e) {
            e.preventDefault();
            $(this).toggleClass("anm-plus-l anm-minus-l");
            $(this).parent().next().slideToggle();
        });
        $(".top-header .user-menu").on("click", function () {
            const kk: any = $(window).width();
            if (kk < 990) {
                $(this).next().slideToggle(300);
                $(this).parent().toggleClass("active");
            }
        });
    }, []);
    return (
        <>
            <div className={`search ${open ? "search--opened " : ""}`}>
                <div className="search__form">
                    <form className="search-bar__form" action="#">
                        <button className="go-btn search__button" type="submit">
                            <i className="icon anm anm-search-l"></i>
                        </button>
                        <input
                            className="search__input"
                            type="search"
                            name="q"
                            value=""
                            placeholder="Search entire store..."
                            aria-label="Search"
                            autoComplete="off"
                        />
                    </form>
                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="search-trigger close-btn"
                    >
                        <i className="anm anm-times-l"></i>
                    </button>
                </div>
            </div>
            <div className="top-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 col-sm-8 col-md-5 col-lg-4">
                            <p className="phone-no">
                                <i className="anm anm-phone-s"></i> +91 8080754160
                            </p>
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4 d-none d-lg-none d-md-block d-lg-block">
                            <div className="text-center">
                                <p className="top-header_middle-text">
                                    {" "}
                                    Nagpur Junction Express Shipping
                                </p>
                            </div>
                        </div>
                        <div className="col-2 col-sm-4 col-md-3 col-lg-4 text-right">
                            <span className="user-menu d-block d-lg-none">
                                <i className="anm anm-user-al" aria-hidden="true"></i>
                            </span>
                            <ul className="customer-links list-inline">
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/register">Create Account</Link>
                                </li>
                                <li>
                                    <Link to="/wishlist">Wishlist</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`header-wrap ${l.pathname === ""
                    ? "classicHeader"
                    : ""
                    } animated d-flex`}
            >
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="logo col-md-2 col-lg-2 d-none d-lg-block">
                            <Link to="/">
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                        <div className="col-2 col-sm-3 col-md-3 col-lg-8">
                            <div className="d-block d-lg-none">
                                <button className="btn--link site-header__menu js-mobile-nav-toggle mobile-nav--open">
                                    <i className="icon anm anm-times-l"></i>
                                    <i className="anm anm-bars-r"></i>
                                </button>
                            </div>
                            <nav className="grid__item" id="AccessibleNav">
                                <ul id="siteNav" className="site-nav medium center hidearrow">
                                    {[
                                        {
                                            name: "Home",
                                        },
                                        {
                                            name: "Shop",
                                        },

                                        {
                                            name: "Blog",
                                        },
                                    ].map((v, i) => (
                                        <li key={i} className="lvl1 parent megamenu">
                                            <Link to={v.name === "Home" ? "/" : "/" + v.name}>
                                                {v.name}
                                                <i className="anm anm-angle-down-l"></i>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-2 d-block d-lg-none mobile-logo">
                            <div className="logo">
                                <Link to="/">
                                    <img
                                        src={logo}
                                        alt="Belle Multipurpose Html Template"
                                        title="Belle Multipurpose Html Template"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="col-4 col-sm-3 col-md-3 col-lg-2">
                            <div className="site-cart">
                                <a href="#;" className="site-header__cart" title="Cart">
                                    <i className="icon anm anm-bag-l"></i>
                                    <span
                                        id="CartCount"
                                        className="site-header__cart-count"
                                        data-cart-render="item_count"
                                    >
                                        1
                                    </span>
                                </a>
                            </div>
                            <div className="site-header__search">
                                <button
                                    type="button"
                                    onClick={() => setOpen(true)}
                                    className="search-trigger"
                                >
                                    <i className="icon anm anm-search-l"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-nav-wrapper" role="navigation">
                <div className="closemobileMenu">
                    <i className="icon anm anm-times-l pull-right"></i> Close Menu
                </div>
                <ul id="MobileNav" className="mobile-nav">
                    {[
                        {
                            name: "Home",
                        },
                        {
                            name: "Shop",
                        },
                        {
                            name: "Product",
                        },
                        {
                            name: "Blog",
                        },
                    ].map((v, i) => (
                        <li key={i} className="lvl1 parent megamenu">
                            <Link to={v.name === "Home" ? "/" : "/" + v.name}>{v.name}</Link>
                        </li>
                    ))}
                    <li className="lvl1">
                        <Link to="/">
                            <b>Buy Now!</b>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Header;
