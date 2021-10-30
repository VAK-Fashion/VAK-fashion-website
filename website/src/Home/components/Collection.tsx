import React from "react";
import Slider from "react-slick";

import accessories from "../../assets/images/collection/accessories.jpg"
import shoes from "../../assets/images/collection/shoes.jpg"
import jewellry from "../../assets/images/collection/jewellry.jpg"
import fashion from "../../assets/images/collection/fashion.jpg"
import cosmetic from "../../assets/images/collection/cosmetic.jpg"
import bag from "../../assets/images/collection/bag.jpg"
const Collection = () => {
    const coll = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return <div className="collection-box section">
        <div className="container-fluid">
            <Slider {...coll} className="collection-grid">
                <div className="collection-grid-item">
                    <a href="collection-page.html" className="collection-grid-item__link">
                        <img data-src='static/assets/images/collection/fashion.jpg' src='static/assets/images/collection/fashion.jpg' alt="Fashion" className="blur-up lazyload" />
                        <div className="collection-grid-item__title-wrapper">
                            <h3 className="collection-grid-item__title btn btn--secondary no-border">Fashion</h3>
                        </div>
                    </a>
                </div>
                <div className="collection-grid-item">
                    <a href="collection-page.html" className="collection-grid-item__link">
                        <img className="blur-up lazyload" data-src='static/assets/images/collection/cosmetic.jpg' src='static/assets/images/collection/cosmetic.jpg' alt="Cosmetic" />
                        <div className="collection-grid-item__title-wrapper">
                            <h3 className="collection-grid-item__title btn btn--secondary no-border">Cosmetic</h3>
                        </div>
                    </a>
                </div>
                <div className="collection-grid-item blur-up lazyloaded">
                    <a href="collection-page.html" className="collection-grid-item__link">
                        <img data-src='static/assets/images/collection/bag.jpg' src='static/assets/images/collection/bag.jpg' alt="Bag" className="blur-up lazyload" />
                        <div className="collection-grid-item__title-wrapper">
                            <h3 className="collection-grid-item__title btn btn--secondary no-border">Bag</h3>
                        </div>
                    </a>
                </div>
                <div className="collection-grid-item">
                    <a href="collection-page.html" className="collection-grid-item__link">
                        <img data-src='static/assets/images/collection/accessories.jpg' src='static/assets/images/collection/accessories.jpg' alt="Accessories" className="blur-up lazyload" />
                        <div className="collection-grid-item__title-wrapper">
                            <h3 className="collection-grid-item__title btn btn--secondary no-border">Accessories</h3>
                        </div>
                    </a>
                </div>
                <div className="collection-grid-item">
                    <a href="collection-page.html" className="collection-grid-item__link">
                        <img data-src='static/assets/images/collection/shoes.jpg' src='static/assets/images/collection/shoes.jpg' alt="Shoes" className="blur-up lazyload" />
                        <div className="collection-grid-item__title-wrapper">
                            <h3 className="collection-grid-item__title btn btn--secondary no-border">Shoes</h3>
                        </div>
                    </a>
                </div>
                <div className="collection-grid-item">
                    <a href="collection-page.html" className="collection-grid-item__link">
                        <img data-src='static/assets/images/collection/jewellry.jpg' src='static/assets/images/collection/jewellry.jpg' alt="Jewellry" className="blur-up lazyload" />
                        <div className="collection-grid-item__title-wrapper">
                            <h3 className="collection-grid-item__title btn btn--secondary no-border">Jewellry</h3>
                        </div>
                    </a>
                </div>

            </Slider>
        </div>
    </div>;
};

export default Collection;
