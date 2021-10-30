import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const Product = () => {
    const [crr, setCrr] = React.useState<any>({
        Women: true,
        Man: false,
        Sale: false,
    });
    //   console.log(crr);

    const ss = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="tab-slider-product section">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="section-header text-center">
                            <h2 className="h2">New Arrivals</h2>
                            <p>Browse the huge variety of our products</p>
                        </div>
                        <div className="tabs-listing">
                            <ul className="tabs clearfix">
                                {["lagging", "kurti"].map((v, i) => (
                                    <li
                                        className={crr[v] ? "active" : ""}
                                        onClick={() => {
                                            setCrr({
                                                Women: v === "lagging",
                                                Man: v === "kurti",

                                            });
                                        }}
                                    >
                                        {v}
                                    </li>
                                ))}
                            </ul>
                            <div className="tab_container">
                                <div className="tab-container grid-products">
                                    {crr.Women ? (
                                        <Slider {...ss} className="productSlider">
                                            {[
                                                {
                                                    image1: 'static/assets/images/product-images/product-image1.jpg',
                                                    image2: 'static/assets/images/product-images/product-image1-1.jpg',
                                                    onSale: {
                                                        is: true,
                                                        label: "new",
                                                    },
                                                    countdon: {
                                                        is: true,
                                                        end: "2022/03/01",
                                                    },
                                                    name: "Edna Dress",
                                                    price: {
                                                        old: "500",
                                                        new: "600",
                                                    },
                                                },
                                                {
                                                    image1: 'static/assets/images/product-images/product-image2.jpg',
                                                    image2: 'static/assets/images/product-images/product-image2-2.jpg',
                                                    onSale: {
                                                        is: false,
                                                        label: "new",
                                                    },
                                                    countdon: {
                                                        is: false,
                                                    },
                                                    name: "Elastic Waist Dress",
                                                    price: {
                                                        new: "600",
                                                    },
                                                },
                                                {
                                                    image1: 'static/assets/images/product-images/product-image3.jpg',
                                                    image2: 'static/assets/images/product-images/product-image3-3.jpg',
                                                    onSale: {
                                                        is: true,
                                                        label: "Sale",
                                                    },
                                                    countdon: {
                                                        is: false,
                                                    },
                                                    name: "3/4 Sleeve Kimono Dress",
                                                    price: {
                                                        new: "550.00",
                                                    },
                                                },
                                                {
                                                    image1: 'static/assets/images/product-images/product-image4.jpg',
                                                    image2: 'static/assets/images/product-images/product-image4-1.jpg',
                                                    onSale: {
                                                        is: true,
                                                        label: "Hot",
                                                    },
                                                    countdon: {
                                                        is: false,
                                                    },

                                                    name: "Cape Dress",
                                                    price: {
                                                        new: "788.00",
                                                        old: "900.00",
                                                    },
                                                },
                                                {
                                                    image1: 'static/assets/images/product-images/product-image3.jpg',
                                                    image2: 'static/assets/images/product-images/product-image3-1.jpg',
                                                    onSale: {
                                                        is: false,
                                                        label: "Hot",
                                                    },
                                                    countdon: {
                                                        is: false,
                                                    },
                                                    name: "Paper Dress",
                                                    price: {
                                                        new: "550.00",
                                                    },
                                                },
                                            ].map((v, i) => {
                                                // console.log(i);
                                                return (
                                                    <div className="col-12 item" key={i}>
                                                        <div className="product-image">
                                                            <Link to={'/Product/' + v.name.replace('/', '-')}>
                                                                <img
                                                                    src={v.image1}
                                                                    alt={i.toString()}
                                                                    title="product"
                                                                    data-src={v.image1}
                                                                    className="primary blur-up lazyload"
                                                                />
                                                                <img
                                                                    className="hover blur-up lazyload"
                                                                    src={v.image2}
                                                                    data-src={v.image2}
                                                                    alt={i.toString()}
                                                                />
                                                                {v.onSale.is ? (
                                                                    <div className="product-labels rectangle">
                                                                        <span className="lbl on-sale">-16%</span>
                                                                        <span className="lbl pr-label1">
                                                                            {v.onSale.label}
                                                                        </span>
                                                                    </div>
                                                                ) : null}
                                                            </Link>
                                                            {v.countdon.is ? (
                                                                <div
                                                                    className="saleTime desktop"
                                                                    data-countdown={v.countdon.end}
                                                                ></div>
                                                            ) : null}
                                                            <form action="#" className="variants add">
                                                                <button
                                                                    className="btn btn-addto-cart"
                                                                    tabIndex={0}
                                                                >
                                                                    Add to Cart
                                                                </button>
                                                            </form>
                                                            <div className="button-set">
                                                                <Link
                                                                    to="/"
                                                                    className="quick-view-popup quick-view"
                                                                    data-toggle="modal"
                                                                    data-target="#content_quickview"
                                                                >
                                                                    <i className="icon anm anm-search-plus-r"></i>
                                                                </Link>
                                                                <div className="wishlist-btn">
                                                                    <Link
                                                                        to="/"
                                                                        className="wishlist add-to-wishlist"
                                                                    >
                                                                        <i className="icon anm anm-heart-l"></i>
                                                                    </Link>
                                                                </div>
                                                                <div className="compare-btn">
                                                                    <a
                                                                        className="compare add-to-compare"
                                                                        href="compare.html"
                                                                        title="Add to Compare"
                                                                    >
                                                                        <i className="icon anm anm-random-r"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-derails text-center">
                                                            <div className="product-name">
                                                                <Link to="/">{v.name}</Link>
                                                            </div>
                                                            <div className="product-price">
                                                                {v.price.old !== undefined ? (
                                                                    <span className="old-price">
                                                                        &#8377; {v.price.old}
                                                                    </span>
                                                                ) : null}
                                                                <span className="price">
                                                                    &#8377; {v.price.new}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </Slider>
                                    ) : null}
                                    {crr.Man ? (
                                        <Slider {...ss} className="productSlider">
                                            {[
                                                {
                                                    image1: 'static/assets/images/product-images/product-image6.jpg',
                                                    image2: 'static/assets/images/product-images/product-image6-1.jpg',
                                                    onSale: {
                                                        is: true,
                                                        label: "new",
                                                    },
                                                    countdon: {
                                                        is: true,
                                                        end: "2022/03/01",
                                                    },
                                                    name: "Edna Dress",
                                                    price: {
                                                        old: "500",
                                                        new: "600",
                                                    },
                                                },
                                                {
                                                    image1: 'static/assets/images/product-images/product-image7.jpg',
                                                    image2: 'static/assets/images/product-images/product-image7-1.jpg',
                                                    onSale: {
                                                        is: false,
                                                        label: "new",
                                                    },
                                                    countdon: {
                                                        is: false,
                                                    },
                                                    name: "Elastic Waist Dress",
                                                    price: {
                                                        new: "600",
                                                    },
                                                },
                                                {
                                                    image1: 'static/assets/images/product-images/product-image8.jpg',
                                                    image2: 'static/assets/images/product-images/product-image8-1.jpg',
                                                    onSale: {
                                                        is: true,
                                                        label: "Sale",
                                                    },
                                                    countdon: {
                                                        is: false,
                                                    },
                                                    name: "3/4 Sleeve Kimono Dress",
                                                    price: {
                                                        new: "550.00",
                                                    },
                                                },
                                                {
                                                    image1: 'static/assets/images/product-images/product-image9.jpg',
                                                    image2: 'static/assets/images/product-images/product-image9-1.jpg',
                                                    onSale: {
                                                        is: true,
                                                        label: "Hot",
                                                    },
                                                    countdon: {
                                                        is: false,
                                                    },

                                                    name: "Cape Dress",
                                                    price: {
                                                        new: "788.00",
                                                        old: "900.00",
                                                    },
                                                },
                                                {
                                                    image1: 'static/assets/images/product-images/product-image10.jpg',
                                                    image2: 'static/assets/images/product-images/product-image10-1.jpg',
                                                    onSale: {
                                                        is: false,
                                                        label: "Hot",
                                                    },
                                                    countdon: {
                                                        is: false,
                                                    },
                                                    name: "Paper Dress",
                                                    price: {
                                                        new: "550.00",
                                                    },
                                                },
                                            ].map((v, i) => {
                                                // console.log(i);
                                                return (
                                                    <div className="col-12 item" key={i}>
                                                        <div className="product-image">
                                                            <Link to="/">
                                                                <img
                                                                    src={v.image1}
                                                                    alt={i.toString()}
                                                                    title="product"
                                                                    data-src={v.image1}
                                                                    className="primary blur-up lazyload"
                                                                />
                                                                <img
                                                                    className="hover blur-up lazyload"
                                                                    src={v.image2}
                                                                    data-src={v.image2}
                                                                    alt={i.toString()}
                                                                />
                                                                {v.onSale.is ? (
                                                                    <div className="product-labels rectangle">
                                                                        <span className="lbl on-sale">-16%</span>
                                                                        <span className="lbl pr-label1">
                                                                            {v.onSale.label}
                                                                        </span>
                                                                    </div>
                                                                ) : null}
                                                            </Link>
                                                            {v.countdon.is ? (
                                                                <div
                                                                    className="saleTime desktop"
                                                                    data-countdown={v.countdon.end}
                                                                ></div>
                                                            ) : null}
                                                            <form action="#" className="variants add">
                                                                <button
                                                                    className="btn btn-addto-cart"
                                                                    tabIndex={0}
                                                                >
                                                                    Add to Cart
                                                                </button>
                                                            </form>
                                                            <div className="button-set">
                                                                <Link
                                                                    to="/"
                                                                    className="quick-view-popup quick-view"
                                                                    data-toggle="modal"
                                                                    data-target="#content_quickview"
                                                                >
                                                                    <i className="icon anm anm-search-plus-r"></i>
                                                                </Link>
                                                                <div className="wishlist-btn">
                                                                    <Link
                                                                        to="/"
                                                                        className="wishlist add-to-wishlist"
                                                                    >
                                                                        <i className="icon anm anm-heart-l"></i>
                                                                    </Link>
                                                                </div>
                                                                <div className="compare-btn">
                                                                    <a
                                                                        className="compare add-to-compare"
                                                                        href="compare.html"
                                                                        title="Add to Compare"
                                                                    >
                                                                        <i className="icon anm anm-random-r"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-derails text-center">
                                                            <div className="product-name">
                                                                <Link to="/">{v.name}</Link>
                                                            </div>
                                                            <div className="product-price">
                                                                {v.price.old !== undefined ? (
                                                                    <span className="old-price">
                                                                        &#8377; {v.price.old}
                                                                    </span>
                                                                ) : null}
                                                                <span className="price">
                                                                    &#8377; {v.price.new}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </Slider>
                                    ) : null}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
