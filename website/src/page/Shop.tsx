import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import $ from "jquery";
const Shop = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        $(".filter-widget .widget-title").on("click", (e) => {
            $(e.currentTarget).next().slideToggle("300");
            $(e.currentTarget).toggleClass("active");
        });
        document.body.classList.add("template-collection");
    }, []);
    return (
        <div id="page-content">
            <div className="collection-header">
                <div className="collection-hero">
                    <div className="collection-hero__image">
                        <img
                            className="blur-up lazyload"
                            data-src="static/assets/images/cat-women2.jpg"
                            src="static/assets/images/cat-women2.jpg"
                            alt="Women"
                            title="Women"
                        />
                    </div>
                    <div className="collection-hero__title-wrapper">
                        <h1 className="collection-hero__title page-width">Shop</h1>
                    </div>
                </div>
            </div>
            <Container fluid>
                <Row>
                    <Col sm="12" md="3" lg="2" className="col-12 sidebar filterbar">
                        <div className="closeFilter d-block d-md-none d-lg-none">
                            <i className="icon icon anm anm-times-l"></i>
                        </div>
                        <div className="sidebar_tags">
                            <div className="sidebar_widget categories filter-widget">
                                <div className="widget-title">
                                    <h2>Caregoties</h2>
                                </div>
                                <div className="widget-content">
                                    <ul className="sidebar_categories">
                                        {[
                                            {
                                                name: "Clothing",
                                                sublinks: [
                                                    "Men",
                                                    "Women",
                                                    "Child",
                                                    "View All Clothing",
                                                ],
                                            },
                                            {
                                                name: "Jewellery",
                                                sublinks: [
                                                    "Ring",
                                                    "Neckalses",
                                                    "Eaarings",
                                                    "View All Jewellery",
                                                ],
                                            },
                                        ].map((v, i) => (
                                            <li className="level1 sub-level">
                                                <a className="site-nav"> {v.name}</a>
                                                {v.sublinks.map((v, i) => (
                                                    <li>
                                                        {" "}
                                                        <a className="site-nav">{v}</a>
                                                    </li>
                                                ))}
                                            </li>
                                        ))}
                                        <li className="lvl-1">
                                            <a href="#;" className="site-nav">
                                                Shoes
                                            </a>
                                        </li>
                                        <li className="lvl-1">
                                            <a href="#;" className="site-nav">
                                                Accessories
                                            </a>
                                        </li>
                                        <li className="lvl-1">
                                            <a href="#;" className="site-nav">
                                                Collections
                                            </a>
                                        </li>
                                        <li className="lvl-1">
                                            <a href="#;" className="site-nav">
                                                Sale
                                            </a>
                                        </li>
                                        <li className="lvl-1">
                                            <a href="#;" className="site-nav">
                                                Page
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar_widget filterBox filter-widget">
                                <div className="widget-title">
                                    <h2>Price</h2>
                                    <div className="price-filter">
                                        <div
                                            id="slider-range"
                                            className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                                        >
                                            <div className="ui-slider-range ui-widget-header ui-corner-all"></div>
                                            <span
                                                className="ui-slider-handle ui-state-default ui-corner-all"
                                                tabIndex={0}
                                            ></span>
                                            <span
                                                className="ui-slider-handle ui-state-default ui-corner-all"
                                                tabIndex={0}
                                            ></span>
                                        </div>
                                        <Row>
                                            <Col className="col-6">
                                                <p className="no-margin">
                                                    <input type="text" id="amount" />
                                                </p>
                                            </Col>
                                            <Col className="col-6 text-right margin-25px-top">
                                                <button className="btn btn-secondary btn--small">
                                                    filter
                                                </button>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar_widget filterBox filter-widget size-swacthes">
                                <div className="widget-title">
                                    <h2>Size</h2>
                                </div>
                                <div className="filter-color swacth-list">
                                    <ul>
                                        {["X", "XL", "XLL", "M", "L", "S", "XXXL", "XXL", "XS"].map(
                                            (v, i) => (
                                                <li key={i}>
                                                    <span className="swacth-btn">{v}</span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar_widget">
                                <div className="widget-title">
                                    <h2>Information</h2>
                                </div>
                                <div className="widget-content">
                                    <p>
                                        Use this text to share information about your brand with
                                        your customers. Describe a product, share announcements, or
                                        welcome customers to your store.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm="12" md="9" lg="10" className="main-col">
                        <div className="productList">
                            <button className="btn btn-filter d-block d-md-none d-lg-none">
                                {" "}
                                Product Filters{" "}
                            </button>
                            <div className="grid-products grid--view-items">
                                <Row>
                                    {[
                                        {
                                            image: {
                                                _1: "static/assets/images/product-images/product-image1.jpg",
                                                _2: "static/assets/images/product-images/product-image1-1.jpg",
                                            },
                                            label: {
                                                new: true,
                                                onSale: "-16%",
                                            },
                                            product: {
                                                name: "Edna Drass",
                                                Price: {
                                                    old: 500.0,
                                                    price: 600.0,
                                                },
                                                soldOut: false,
                                            },
                                        },
                                        {
                                            image: {
                                                _1: 'static/assets/images/product-images/product-image1.jpg',
                                                _2: "static/assets/images/product-images/product-image1-1.jpg",
                                            },
                                            label: {
                                                new: true,
                                                onSale: "-16%",
                                            },
                                            product: {
                                                name: "Edna Drass",
                                                Price: {
                                                    old: 500.0,
                                                    price: 600.0,
                                                },
                                                soldOut: true,
                                            },
                                        },
                                        {
                                            image: {
                                                _1: "static/assets/images/product-images/product-image1.jpg",
                                                _2: "static/assets/images/product-images/product-image1-1.jpg",
                                            },
                                            label: {
                                                new: true,
                                                onSale: "-16%",
                                            },
                                            product: {
                                                name: "Edna Drass",
                                                Price: {
                                                    old: 500.0,
                                                    price: 600.0,
                                                },
                                                soldOut: false,
                                            },
                                        },
                                        {
                                            image: {
                                                _1: "static/assets/images/product-images/product-image1.jpg",
                                                _2: "static/assets/images/product-images/product-image1-1.jpg",
                                            },
                                            label: {
                                                new: true,
                                                onSale: "-16%",
                                            },
                                            product: {
                                                name: "Edna Drass",
                                                Price: {
                                                    old: 500.0,
                                                    price: 600.0,
                                                },
                                                soldOut: false,
                                            },
                                        },
                                        {
                                            image: {
                                                _1: "static/assets/images/product-images/product-image1.jpg",
                                                _2: "static/assets/images/product-images/product-image1-1.jpg",
                                            },
                                            label: {
                                                new: true,
                                                onSale: "-16%",
                                            },
                                            product: {
                                                name: "Edna Drass",
                                                Price: {
                                                    old: 500.0,
                                                    price: 600.0,
                                                },
                                                soldOut: false,
                                            },
                                        },
                                        {
                                            image: {
                                                _1: "static/assets/images/product-images/product-image1.jpg",
                                                _2: "static/assets/images/product-images/product-image1-1.jpg",
                                            },
                                            label: {
                                                new: true,
                                                onSale: "-16%",
                                            },
                                            product: {
                                                name: "Edna Drass",
                                                Price: {
                                                    old: 500.0,
                                                    price: 600.0,
                                                },
                                                soldOut: false,
                                            },
                                        },
                                    ].map((v, i) => (
                                        <Col
                                            key={i}
                                            sm="6"
                                            md="4"
                                            lg="3"
                                            className={`col-6 grid-view-item style2 item ${v.product.soldOut ? "grid-view-item--sold-out" : ""
                                                }`}
                                        >
                                            <div className="grid-view_image">
                                                <Link
                                                    to={"/Product/" + v.product.name}
                                                    className="grid-view-item__link"
                                                >
                                                    <img
                                                        className="grid-view-item__image primary blur-up lazyload"
                                                        data-src={v.image._1}
                                                        src={v.image._1}
                                                        alt={v.product.name}
                                                        title={v.product.name}
                                                    />
                                                    <img
                                                        className="grid-view-item__image hover blur-up lazyload"
                                                        data-src={v.image._2}
                                                        src={v.image._2}
                                                        alt={v.product.name}
                                                        title={v.product.name}
                                                    />
                                                    <div className="product-labels rectangular">
                                                        {v.label.onSale !== "" ? (
                                                            <span className="lbl on-sale">
                                                                {v.label.onSale}
                                                            </span>
                                                        ) : null}
                                                        {v.label.new ? (
                                                            <span className="lbl pr-label1">new</span>
                                                        ) : null}
                                                    </div>
                                                    {v.product.soldOut ? (
                                                        <span className="sold-out">
                                                            <span>Sold out</span>
                                                        </span>
                                                    ) : null}
                                                </Link>
                                                <div className="product-details hoverDetails  text-center mobile">
                                                    <div className="product-name">
                                                        <Link to={"/Product/" + v.product.name}>
                                                            {v.product.name}
                                                        </Link>
                                                    </div>
                                                    <div className="product-price">
                                                        <span className="old-price">
                                                            {v.product.Price.old}
                                                        </span>
                                                        <span className="price">
                                                            {v.product.Price.price}
                                                        </span>
                                                    </div>
                                                    {!v.product.soldOut ? (
                                                        <div className="button-set">
                                                            <Link
                                                                to={"/Product/" + v.product.name}
                                                                className="quick-view-popup quick-view"
                                                            >
                                                                <i className="icon anm anm-search-plus-r"></i>
                                                            </Link>
                                                            <form>
                                                                <button
                                                                    className="btn btn--secondary cartIcon btn-addto-cart"
                                                                    type="button"
                                                                >
                                                                    <i className="icon anm anm-bag-l"></i>
                                                                </button>
                                                            </form>
                                                            <div className="wishlist-btn">
                                                                <Link
                                                                    className="wishlist add-to-wislist"
                                                                    to="#"
                                                                >
                                                                    <i className="icon anm anm-heart-l"></i>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Shop;
