import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider, { Settings } from "react-slick";
import belleBanner1 from "../assets/images/slideshow-banners/belle-banner1.jpg";
import belleBanner2 from "../assets/images/slideshow-banners/belle-banner2.jpg";
import Product from './components/Product';
import Collection from './components/Collection';
import ProductRow from './components/ProductRow';
import Bolg from './components/Bolg';
import Featuer from './components/Featuer';

const App = () => {

    const ok: Settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        lazyLoad: 'ondemand'
    }
    return (
        <div className="page-content">
            <div className="slideshow slideshow-w pb-section sliderFull">
                <Slider {...ok}>
                    {[
                        {
                            image: {
                                src: belleBanner1,
                                alt: "Shop Our New Collection",
                                title: "Shop Our New Collection",
                            },
                            title: "Shop Our New Collection",
                            subtitle:
                                "From Hight to low, classic or modern. We have you covered",
                        },
                        {
                            image: {
                                src: belleBanner2,
                                alt: "Summer Bikini Collection",
                                title: "Summer Bikini Collection",
                            },
                            title: "Summer Bikini Collection",
                            subtitle: "Save up to 50% off this weekend only",
                        },
                    ].map((v, i) => (
                        <div className="slide">
                            <div className="blur-up lazyload bg-size"
                                style={{

                                    height: 909,
                                    backgroundImage: `url("${v.image.src}")`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center center',
                                    backgroundRepeat: 'no-repeat',

                                }}
                            >

                                <img src={v.image.src} data-src={v.image.src} className="blur-up lazyload bg-img d-none" />
                                <div className="slideshow__text-wrap slideshow__overlay classic bottom">
                                    <div className="slideshow__text-content bottom">
                                        <div className="wrap-caption center">
                                            <h2 className="h1 mega-title slideshow__title">
                                                {v.title}
                                            </h2>
                                            <span className="mega-subtitle slideshow__subtitle">
                                                {v.subtitle}
                                            </span>
                                            <span className="btn">Shop now</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <Product />

            <Collection />
            <ProductRow />
            <Bolg />
            <Featuer />
        </div>
    )
}

export default App
