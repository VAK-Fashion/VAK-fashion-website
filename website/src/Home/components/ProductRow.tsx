import React from 'react'
import { Link } from 'react-router-dom';
import productImage2 from "../../assets/images/product-images/product-image2.jpg";
import productImage21 from "../../assets/images/product-images/product-image2-1.jpg";
import productImage1 from "../../assets/images/product-images/product-image1.jpg";
import productImage11 from "../../assets/images/product-images/product-image1-1.jpg";
import productImage31 from "../../assets/images/product-images/product-image3-1.jpg";
import productImage3 from "../../assets/images/product-images/product-image3.jpg";
import productImage4 from "../../assets/images/product-images/product-image4.jpg";
import productImage41 from "../../assets/images/product-images/product-image4-1.jpg";
import productImage5 from "../../assets/images/product-images/product-image5.jpg";
import productImage51 from "../../assets/images/product-images/product-image5-1.jpg";
import productImage6 from "../../assets/images/product-images/product-image16.jpg";
import productImage61 from "../../assets/images/product-images/product-image16-1.jpg";

const ProductRow = () => {
    return (
        <div className="product-rows section">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="section-header text-center">
                            <h2 className="h2">Featured collection</h2>
                            <p>Our most popular products based on sales</p>
                        </div>
                    </div>
                </div>
                <div className="grid-products">
                    <div className="row">
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
                                image2: 'static/assets/images/product-images/product-image2-1.jpg',
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
                                image2: 'static/assets/images/product-images/product-image3-1.jpg',
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
                                    old: '900.00'
                                },

                            },
                            {
                                image1: 'static/assets/images/product-images/product-image5.jpg',
                                image2: 'static/assets/images/product-images/product-image5-1.jpg',
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
                            {
                                image1: 'static/assets/images/product-images/product-image6.jpg',
                                image2: 'static/assets/images/product-images/product-image6-1.jpg',
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
                            return (
                                <div className="col-6 col-sm-6 col-md-4 col-lg-4 item grid-view-item style2" key={i}>
                                    <div className="grid-view_image">
                                        <Link to={'/Product/' + v.name} className="grid-view-item__link">
                                            <img
                                                src={v.image1}
                                                alt={i.toString()}
                                                title="product"
                                                data-src={v.image1}
                                                className="grid-view-item__image primary blur-up lazyload"
                                            />
                                            <img
                                                className="grid-view-item__image hover blur-up lazyload"
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



                                    </div>
                                    <div className="product-details hoverDetails text-center mobile">
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
                                        <div className="button-set">
                                            <a href="javascript:void(0)" title="Quick View" className="quick-view-popup quick-view" data-toggle="modal" data-target="#content_quickview">
                                                <i className="icon anm anm-search-plus-r"></i>
                                            </a>
                                            <form className="variants add" action="#" method="post">
                                                <button className="btn cartIcon btn-addto-cart" type="button" tabIndex={0}><i className="icon anm anm-bag-l"></i></button>
                                            </form>
                                            <div className="wishlist-btn">
                                                <a className="wishlist add-to-wishlist" href="wishlist.html">
                                                    <i className="icon anm anm-heart-l"></i>
                                                </a>
                                            </div>
                                            <div className="compare-btn">
                                                <a className="compare add-to-compare" href="compare.html" title="Add to Compare">
                                                    <i className="icon anm anm-random-r"></i>
                                                </a>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductRow
