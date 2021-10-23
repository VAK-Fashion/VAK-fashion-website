import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import product1 from "../../assets/images/product-images/product-image1.jpg";
import product11 from "../../assets/images/product-images/product-image1-1.jpg";
import productImage2 from "../../assets/images/product-images/product-image2.jpg";
import productImage21 from "../../assets/images/product-images/product-image2-1.jpg";
import productImage31 from "../../assets/images/product-images/product-image3-1.jpg";
import productImage3 from "../../assets/images/product-images/product-image3.jpg";
import productImage4 from "../../assets/images/product-images/product-image4.jpg";
import productImage41 from "../../assets/images/product-images/product-image4-1.jpg";
import productImage6 from "../../assets/images/product-images/product-image6.jpg";
import productImage61 from "../../assets/images/product-images/product-image6-1.jpg";
import productImage7 from "../../assets/images/product-images/product-image7.jpg";
import productImage71 from "../../assets/images/product-images/product-image7-1.jpg";
import productImage8 from "../../assets/images/product-images/product-image8.jpg";
import productImage81 from "../../assets/images/product-images/product-image8-1.jpg";
import productImage9 from "../../assets/images/product-images/product-image9.jpg";
import productImage91 from "../../assets/images/product-images/product-image9-1.jpg";
import productImage10 from "../../assets/images/product-images/product-image10.jpg";
import productImage101 from "../../assets/images/product-images/product-image10-1.jpg";
import productImage11 from "../../assets/images/product-images/product-image11.jpg";
import productImage111 from "../../assets/images/product-images/product-image11-1.jpg";
import productImage12 from "../../assets/images/product-images/product-image12.jpg";
import productImage121 from "../../assets/images/product-images/product-image12-1.jpg";
import productImage13 from "../../assets/images/product-images/product-image13.jpg";
import productImage131 from "../../assets/images/product-images/product-image13-1.jpg";
import productImage14 from "../../assets/images/product-images/product-image14.jpg";
import productImage141 from "../../assets/images/product-images/product-image14-1.jpg";
import productImage15 from "../../assets/images/product-images/product-image15.jpg";
import productImage151 from "../../assets/images/product-images/product-image15-1.jpg";

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
                                {["Women", "Man", "Sale"].map((v, i) => (
                                    <li
                                        className={crr[v] ? "active" : ""}
                                        onClick={() => {
                                            setCrr({
                                                Women: v === "Women",
                                                Man: v === "Man",
                                                Sale: v === "Sale",
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
                                                    image1: product1,
                                                    image2: product11,
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
                                                    image1: productImage2,
                                                    image2: productImage21,
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
                                                    image1: productImage3,
                                                    image2: productImage31,
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
                                                    image1: productImage4,
                                                    image2: productImage41,
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
                                                    image1: productImage3,
                                                    image2: productImage31,
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
                                                    image1: productImage6,
                                                    image2: productImage61,
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
                                                    image1: productImage7,
                                                    image2: productImage71,
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
                                                    image1: productImage8,
                                                    image2: productImage81,
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
                                                    image1: productImage9,
                                                    image2: productImage91,
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
                                                    image1: productImage10,
                                                    image2: productImage101,
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
                                    {crr.Sale ? (
                                        <Slider {...ss} className="productSlider">
                                            {[
                                                {
                                                    image1: productImage11,
                                                    image2: productImage111,
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
                                                    image1: productImage12,
                                                    image2: productImage121,
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
                                                    image1: productImage13,
                                                    image2: productImage131,
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
                                                    image1: productImage14,
                                                    image2: productImage141,
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
                                                    image1: productImage15,
                                                    image2: productImage151,
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
