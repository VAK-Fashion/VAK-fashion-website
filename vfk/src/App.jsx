import * as React from "react";
import { Link } from "react-router-dom";
const App = () => {
  const [crr, setCrr] = React.useState({
    Women: true,
    Men: false,
    Sale: false,
  });
  return (
    <div id="page-content">
      <div className="slideshow slideshow-wrapper pb-section sliderFull">
        <div className="home-slideshow">
          {[
            {
              image: {
                src: "/assets/images/slideshow-banners/belle-banner1.jpg",
                alt: "Shop Our New Collection",
                title: "Shop Our New Collection",
              },
              title: "Shop Our New Collection",
              subtitle:
                "From Hight to low, classic or modern. We have you covered",
            },
            {
              image: {
                src: "/assets/images/slideshow-banners/belle-banner2.jpg",
                alt: "Summer Bikini Collection",
                title: "Summer Bikini Collection",
              },
              title: "Summer Bikini Collection",
              subtitle: "Save up to 50% off this weekend only",
            },
          ].map((v, i) => (
            <div className="slide" key={i}>
              <div className="blur-up lazyload bg-size">
                <img
                  className="blur-up lazyload bg-img"
                  data-src={v.image.src}
                  src={v.image.src}
                  alt={v.image.alt}
                  title={v.image.title}
                />
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
        </div>
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
                        rel={`tab${i + 1}`}
                        className={crr[v] ? "active" : ""}
                      >
                        {v}
                      </li>
                    ))}
                  </ul>
                  <div className="tab_container">
                    <div className="tab-container grid-products">
                      <div id="tab1" className="tab_content grid-products">
                        <div className="productSlider">
                          {[
                            {
                              image1:
                                "assets/images/product-images/product-image1.jpg",
                              image2:
                                "assets/images/product-images/product-image1-2.jpg",
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
                              swatches: [],
                            },
                            {
                              image1:
                                "assets/images/product-images/product-image2.jpg",
                              image2:
                                "assets/images/product-images/product-image2-1.jpg",
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
                              swatches: [],
                            },
                            {
                              image1:
                                "assets/images/product-images/product-image3.jpg",
                              image2:
                                "assets/images/product-images/product-image3-1.jpg",
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
                              swatches: [],
                            },
                            {
                              image1:
                                "assets/images/product-images/product-image4.jpg",
                              image2:
                                "assets/images/product-images/product-image4-1.jpg",
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
                              swatches: [],
                            },
                            {
                              image1:
                                "assets/images/product-images/product-image3.jpg",
                              image2:
                                "assets/images/product-images/product-image3-1.jpg",
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
                              swatches: [],
                            },
                          ].map((v, i) => {
                            console.log(i);
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
                                        <span className="lbl on-sale">
                                          -16%
                                        </span>
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
                                  <div className="product-review">
                                    <i className="font-13 fa fa-star"></i>
                                    <i className="font-13 fa fa-star"></i>
                                    <i className="font-13 fa fa-star"></i>
                                    <i className="font-13 fa fa-star-o"></i>
                                    <i className="font-13 fa fa-star-o"></i>
                                  </div>
                                  <ul className="swatches">
                                    {v.swatches.map((v, i) => (
                                      <li
                                        key={i}
                                        className="swatch medium rounded"
                                      >
                                        <img src={v} alt="image" />
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="collection-box section">
          <div className="container-fluid">
            <div className="collection-grid">
              <div className="collection-grid-item">
                <a
                  href="collection-page.html"
                  className="collection-grid-item__link"
                >
                  <img
                    data-src="/assets/images/collection/fashion.jpg"
                    src="/assets/images/collection/fashion.jpg"
                    alt="Fashion"
                    className="blur-up lazyload"
                  />
                  <div className="collection-grid-item__title-wrapper">
                    <h3 className="collection-grid-item__title btn btn--secondary no-border">
                      Fashion
                    </h3>
                  </div>
                </a>
              </div>
              <div className="collection-grid-item">
                <a
                  href="collection-page.html"
                  className="collection-grid-item__link"
                >
                  <img
                    className="blur-up lazyload"
                    data-src="/assets/images/collection/Cosmetic.jpg"
                    src="/assets/images/collection/Cosmetic.jpg"
                    alt="Cosmetic"
                  />
                  <div className="collection-grid-item__title-wrapper">
                    <h3 className="collection-grid-item__title btn btn--secondary no-border">
                      Cosmetic
                    </h3>
                  </div>
                </a>
              </div>
              <div className="collection-grid-item blur-up lazyloaded">
                <a
                  href="collection-page.html"
                  className="collection-grid-item__link"
                >
                  <img
                    data-src="/assets/images/collection/bag.jpg"
                    src="/assets/images/collection/bag.jpg"
                    alt="Bag"
                    className="blur-up lazyload"
                  />
                  <div className="collection-grid-item__title-wrapper">
                    <h3 className="collection-grid-item__title btn btn--secondary no-border">
                      Bag
                    </h3>
                  </div>
                </a>
              </div>
              <div className="collection-grid-item">
                <a
                  href="collection-page.html"
                  className="collection-grid-item__link"
                >
                  <img
                    data-src="/assets/images/collection/accessories.jpg"
                    src="/assets/images/collection/accessories.jpg"
                    alt="Accessories"
                    className="blur-up lazyload"
                  />
                  <div className="collection-grid-item__title-wrapper">
                    <h3 className="collection-grid-item__title btn btn--secondary no-border">
                      Accessories
                    </h3>
                  </div>
                </a>
              </div>
              <div className="collection-grid-item">
                <a
                  href="collection-page.html"
                  className="collection-grid-item__link"
                >
                  <img
                    data-src="/assets/images/collection/Shoes.jpg"
                    src="/assets/images/collection/Shoes.jpg"
                    alt="Shoes"
                    className="blur-up lazyload"
                  />
                  <div className="collection-grid-item__title-wrapper">
                    <h3 className="collection-grid-item__title btn btn--secondary no-border">
                      Shoes
                    </h3>
                  </div>
                </a>
              </div>
              <div className="collection-grid-item">
                <a
                  href="collection-page.html"
                  className="collection-grid-item__link"
                >
                  <img
                    data-src="/assets/images/collection/Jewellry.jpg"
                    src="/assets/images/collection/Jewellry.jpg"
                    alt="Jewellry"
                    className="blur-up lazyload"
                  />
                  <div className="collection-grid-item__title-wrapper">
                    <h3 className="collection-grid-item__title btn btn--secondary no-border">
                      Jewellry
                    </h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
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
                                    image1: "/assets/images/product-images/product-image1.jpg",
                                    image2: "/assets/images/product-images/product-image1-1.jpg",
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
                                    swatches: [
                                    ],
                                },
                                {
                                    image1: "/assets/images/product-images/product-image2.jpg",
                                    image2: "/assets/images/product-images/product-image2-1.jpg",
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
                                    swatches: [],
                                },
                                {
                                    image1: "/assets/images/product-images/product-image3.jpg",
                                    image2: "/assets/images/product-images/product-image3-1.jpg",
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
                                    swatches: [
                                    ],
                                },
                                {
                                    image1: "/assets/images/product-images/product-image4.jpg",
                                    image2: "./assets/images/product-images/product-image4-1.jpg",
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
                                    swatches: [
                                    ],
                                },
                                {
                                    image1: "/assets/images/product-images/product-image5.jpg",
                                    image2: "/assets/images/product-images/product-image5-1.jpg",
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
                                    swatches: [
                                    ],
                                },
                                {
                                    image1: "/assets/images/product-images/product-image16.jpg",
                                    image2: "/assets/images/product-images/product-image16-1.jpg",
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
                                    swatches: [
                                       
                                    ],
                                },

                            ].map((v, i) => {
                                return (
                                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 item grid-view-item style2" key={i}>
                                        <div className="grid-view_image">
                                            <Link to="/" className="grid-view-item__link">
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
                                        <ul className="swatches text-center">
                                            {v.swatches.map((v, i) => (
                                                <li key={i} className="swatch medium rounded">
                                                    <img src={v} alt="image" />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="latest-blog section pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="section-header text-center">
                                <h2 className="h2">Latest From our Blog</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {[{
                            date: 'May 02, 2017',
                            artical: 'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account...',
                            image: '/assets/images/blog/post-img1.jpg'
                        }, {
                            date: 'May 02, 2017',
                            artical: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab...',
                            image: '/assets/images/blog/post-img2.jpg'
                        }].map((v, i) => (
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="wrap-blog">
                                    <Link to="/" className="article__grid-image">
                                        <img src={v.image} alt="It's all about how you wear" title="It's all about how you wear" className="blur-up lazyloaded" />
                                    </Link>
                                    <div className="article__grid-meta article__grid-meta--has-image">
                                        <div className="wrap-blog-inner">
                                            <h2 className="h3 article__title">
                                                <Link to="/">It's all about how you wear</Link>
                                            </h2>
                                            <span className="article__date">{v.date}</span>
                                            <div className="rte article__grid-excerpt">
                                                {v.artical}
                                            </div>
                                            <ul className="list--inline article__meta-buttons">
                                                <li><Link to="/">Read more</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="store-feature section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                            <ul className="display-table store-info">
                                <li className="display-table-cell">
                                    <i className="icon anm anm-truck-l"></i>
                                    <h5>Free Shipping &amp; Return</h5>
                                    <span className="sub-text">Free shipping on all US orders</span>
                                </li>
                                <li className="display-table-cell">
                                    <i className="icon anm anm-dollar-sign-r"></i>
                                    <h5>Money Guarantee</h5>
                                    <span className="sub-text">30 days money back guarantee</span>
                                </li>
                                <li className="display-table-cell">
                                    <i className="icon anm anm-comments-l"></i>
                                    <h5>Online Support</h5>
                                    <span className="sub-text">We support online 24/7 on day</span>
                                </li>
                                <li className="display-table-cell">
                                    <i className="icon anm anm-credit-card-front-r"></i>
                                    <h5>Secure Payments</h5>
                                    <span className="sub-text">All payment are Secured and trusted.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default App;
