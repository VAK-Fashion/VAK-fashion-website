import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import img from "../assets/images/product-detail-page/camelia-reversible-big1.jpg";
import Slider, { Settings } from "react-slick";
import s1 from "../assets/images/product-detail-page/camelia-reversible0.jpg";
import s2 from "../assets/images/product-detail-page/camelia-reversible.jpg";
import s3 from "../assets/images/product-detail-page/camelia-reversible6.jpg";
import s4 from "../assets/images/product-detail-page/camelia-reversible7.jpg";
import s5 from "../assets/images/product-detail-page/camelia-reversible8.jpg";
import s6 from "../assets/images/product-detail-page/camelia-reversible1.jpg";
import s7 from "../assets/images/product-detail-page/camelia-reversible2.jpg";
import s8 from "../assets/images/product-detail-page/camelia-reversible3.jpg";
import s9 from "../assets/images/product-detail-page/camelia-reversible4.jpg";
import s10 from "../assets/images/product-detail-page/camelia-reversible5.jpg";
import size from "../assets/images/size.jpg";
import card from "../assets/images/credit-card.png";
import shield from "../assets/images/shield.png";
import worldwide from "../assets/images/worldwide.png";
import phone from "../assets/images/phone-call.png";
const ProductView = () => {
    const data = {
        imageLink: "",
        product: {
            labels: ["Sale", "new"],
            slide: [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10],
            sizeAv: ["s", "m", "l", "xl"],
        },
    };
    const [p, Setp] = React.useState({
        tab1: true,
        tab2: false,
        tab3: false,
        tab4: false,
    });
    React.useEffect(() => {
        window.scrollTo(0, 0)
        document.body.classList.add("template-product");
    }, []);
    return (
        <div id="page-content">
            <div id="MainContent" className="main-content" role="main">
                <div className="bredcrumbWrap">
                    <Container fluid className="breadcrumbs">
                        <Link to="/">Home</Link>
                        <span aria-hidden>›</span>
                    </Container>
                </div>

                <Container
                    fluid
                    id="ProductSection-product-template"
                    className="product-template__container prstyle3"
                >
                    <div className="product-single product-single-1">
                        <div className="left-content-product">
                            <Row>
                                <Col lg="6" md="6" sm="12" className="col-12">
                                    <div className="product-details-img product-single__photos bottom">
                                        <div className="zoompro-wrap product-zoom-right pl-20">
                                            <div className="zoompro-span">
                                                <InnerImageZoom src={img} zoomSrc={img} />
                                            </div>
                                            {data.product.labels.length > 0 ? (
                                                <div className="product-labels">
                                                    {data.product.labels.map((v, i) => (
                                                        <span
                                                            className={`lbl ${v === "Sale"
                                                                ? "on-sale"
                                                                : v === "new"
                                                                    ? "pr-label1"
                                                                    : ""
                                                                }`}
                                                        >
                                                            {v}
                                                        </span>
                                                    ))}
                                                </div>
                                            ) : null}
                                        </div>
                                        <div className="product-thumb product-thumb-1">
                                            <Slider
                                                infinite
                                                slidesToShow={6}
                                                slidesToScroll={1}
                                                {...{ stageMargin: 5 }}
                                                className="product-dec-slider-1 product-tab-left"
                                            >
                                                {data.product.slide.map((v, i) => (
                                                    <img src={v} className="blur-up lazyload" />
                                                ))}
                                            </Slider>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg="6" md="6" sm="12" className="col-12">
                                    <div className="product-single__meta">
                                        <h1 className="product-single__title">
                                            Product Layout Style3
                                        </h1>
                                        <div className="product-nav clearfix">
                                            <a href="#" className="next" title="Next">
                                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                        <div className="prInfoRow">
                                            <div className="product-stock">
                                                {" "}
                                                <span className="instock ">In Stock</span>{" "}
                                                <span className="outstock hide">Unavailable</span>{" "}
                                            </div>
                                            <div className="product-sku">
                                                SKU: <span className="variant-sku">19115-rdxs</span>
                                            </div>
                                        </div>
                                        <p className="product-single__price product-single__price-product-template">
                                            <span className="visually-hidden">Regular price</span>
                                            <s id="ComparePrice-product-template">
                                                <span className="money">$900.00</span>
                                            </s>
                                            <span className="product-price__price product-price__price-product-template product-price__sale product-price__sale--single">
                                                <span id="ProductPrice-product-template">
                                                    <span className="money">$788.00</span>
                                                </span>
                                            </span>
                                            <span className="discount-badge">
                                                {" "}
                                                <span className="devider">|</span>&nbsp;
                                                <span>You Save</span>
                                                <span
                                                    id="SaveAmount-product-template"
                                                    className="product-single__save-amount"
                                                >
                                                    <span className="money">$100.00</span>
                                                </span>
                                                <span className="off">
                                                    (<span>16</span>%)
                                                </span>
                                            </span>
                                        </p>
                                    </div>
                                    <div className="product-single__description rte">
                                        <ul>
                                            <li>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                            </li>
                                            <li>
                                                Sed ut perspiciatis unde omnis iste natus error sit
                                            </li>
                                            <li>
                                                Neque porro quisquam est qui dolorem ipsum quia dolor
                                            </li>
                                            <li>Lorem Ipsum is not simply random text.</li>
                                        </ul>
                                    </div>
                                    <div id="quantity_message">
                                        Hurry! Only <span className="items">4</span> left in stock.
                                    </div>
                                    <div className="product-form product-form-product-template hidedropdown">
                                        <div
                                            className="swatch clerfix swatch-1 option2"
                                            data-option-index="1"
                                        >
                                            <div className="product-form__item">
                                                <label className="header">
                                                    Size: <span className="slVariant">XS</span>
                                                </label>
                                                {data.product.sizeAv.map((v, i) => (
                                                    <div
                                                        key={i}
                                                        data-vale={v}
                                                        className="swatch-element xs available"
                                                    >
                                                        <input
                                                            id={"swatch-1-" + v}
                                                            type="radio"
                                                            className="swatchInput"
                                                            value={v}
                                                        />
                                                        <label
                                                            className="swatchLbl small flat"
                                                            htmlFor={"swatch-1-" + v}
                                                            title={v}
                                                        >
                                                            {v}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="infolinks">
                                            <a
                                                href="#sizechart"
                                                className="sizelink btn"
                                                style={{
                                                    backgroundColor: "transparent !important",
                                                }}
                                            >
                                                {" "}
                                                Size Guide
                                            </a>
                                            <a
                                                href="#productInquiry"
                                                style={{
                                                    backgroundColor: "transparent !important",
                                                }}
                                                className="emaillink btn"
                                            >
                                                {" "}
                                                Ask About this Product
                                            </a>
                                        </p>
                                        <div className="product-action clearfix">
                                            <div className="product-form__item--quantity">
                                                <div className="wrapQtyBtn">
                                                    <div className="qtyField">
                                                        <a
                                                            className="qtyBtn minus"
                                                            href="javascript:void(0);"
                                                        >
                                                            <i
                                                                className="fa anm anm-minus-r"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </a>
                                                        <input
                                                            type="text"
                                                            id="Quantity"
                                                            name="quantity"
                                                            value="1"
                                                            className="product-form__input qty"
                                                        />
                                                        <a
                                                            className="qtyBtn plus"
                                                            href="javascript:void(0);"
                                                        >
                                                            <i
                                                                className="fa anm anm-plus-r"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-form__item--submit">
                                                <button
                                                    type="button"
                                                    name="add"
                                                    className="btn product-form__cart-submit"
                                                >
                                                    <span>Add to cart</span>
                                                </button>
                                            </div>
                                            <div
                                                className="shopify-payment-button"
                                                data-shopify="payment-button"
                                            >
                                                <button
                                                    type="button"
                                                    className="shopify-payment-button__button shopify-payment-button__button--unbranded"
                                                >
                                                    Buy it now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <div className="tabs-listing">
                                    <ul className="product-tabs">
                                        {[
                                            "Product Details",
                                            "Product Reviews",
                                            "Size Chart",
                                            "Shipping & Returns",
                                        ].map((v, i) => (
                                            <li
                                                onClick={() => {
                                                    Setp({
                                                        tab1: v === "Product Details",
                                                        tab2: v === "Product Reviews",
                                                        tab3: v === "Size Chart",
                                                        tab4: v === "Shipping & Returns",
                                                    });
                                                }}
                                                className={
                                                    (p.tab1 && v == "Product Details") ||
                                                        (p.tab2 && v == "Product Reviews") ||
                                                        (p.tab3 && v == "Size Chart") ||
                                                        (p.tab4 && v == "Shipping & Returns")
                                                        ? "active"
                                                        : ""
                                                }
                                            >
                                                <a className="tablink">{v}</a>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="tab-container">
                                        {p.tab1 ? (
                                            <div>
                                                <div className="product-description rte">
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the
                                                        industry's standard dummy text ever since the 1500s,
                                                        when an unknown printer took a galley of type and
                                                        scrambled it to make a type specimen book. It has
                                                        survived not only five centuries, but also the leap
                                                        into electronic typesetting, remaining essentially
                                                        unchanged.
                                                    </p>
                                                    <ul>
                                                        <li>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing
                                                            elit
                                                        </li>
                                                        <li>
                                                            Sed ut perspiciatis unde omnis iste natus error
                                                            sit
                                                        </li>
                                                        <li>
                                                            Neque porro quisquam est qui dolorem ipsum quia
                                                            dolor
                                                        </li>
                                                        <li>Lorem Ipsum is not simply random text.</li>
                                                        <li>Free theme updates</li>
                                                    </ul>
                                                    <h3>
                                                        Sed ut perspiciatis unde omnis iste natus error sit
                                                        voluptatem
                                                    </h3>
                                                    <p>
                                                        You can change the position of any sections such as
                                                        slider, banner, products, collection and so on by
                                                        just dragging and dropping.&nbsp;
                                                    </p>
                                                    <h3>Lorem Ipsum is not simply random text.</h3>
                                                    <p>
                                                        But I must explain to you how all this mistaken idea
                                                        of denouncing pleasure and praising pain was born
                                                        and I will give you a complete account of the
                                                        system, and expound the actual teachings of the
                                                        great explorer of the truth, the master-builder of
                                                        human happiness.
                                                    </p>
                                                    <p>
                                                        Change colors, fonts, banners, megamenus and more.
                                                        Preview changes are live before saving them.
                                                    </p>
                                                    <h3>1914 translation by H. Rackham</h3>
                                                    <p>
                                                        But I must explain to you how all this mistaken idea
                                                        of denouncing pleasure and praising pain was born
                                                        and I will give you a complete account of the
                                                        system, and expound the actual teachings of the
                                                        great explorer of the truth, the master-builder of
                                                        human happiness.
                                                    </p>
                                                    <h3>
                                                        Section 1.10.33 of "de Finibus Bonorum et Malorum",
                                                        written by Cicero in 45 BC
                                                    </h3>
                                                    <p>
                                                        At vero eos et accusamus et iusto odio dignissimos
                                                        ducimus qui blanditiis praesentium voluptatum
                                                        deleniti atque corrupti quos dolores et quas
                                                        molestias excepturi sint occaecati cupiditate non
                                                        provident, similique sunt in culpa qui officia
                                                        deserunt mollitia animi, id est laborum et dolorum
                                                        fuga.
                                                    </p>
                                                    <h3>
                                                        The standard Lorem Ipsum passage, used since the
                                                        1500s
                                                    </h3>
                                                    <p>
                                                        You can use variant style from colors, images or
                                                        variant images. Also available differnt type of
                                                        design styles and size.
                                                    </p>
                                                    <h3>Lorem Ipsum is not simply random text.</h3>
                                                    <p>
                                                        But I must explain to you how all this mistaken idea
                                                        of denouncing pleasure and praising pain was born
                                                        and I will give you a complete account of the
                                                        system, and expound the actual teachings of the
                                                        great explorer of the truth, the master-builder of
                                                        human happiness.
                                                    </p>
                                                    <h3>Proin ut lacus eget elit molestie posuere.</h3>
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the
                                                        industry's standard dummy text ever since the 1500s,
                                                        when an unknown printer took a galley of type and
                                                        scrambled.
                                                    </p>
                                                </div>
                                            </div>
                                        ) : null}
                                        {p.tab2 ? (
                                            <div>
                                                <div id="shopify-product-reviews">
                                                    <div className="spr-content">
                                                        <fieldset className="spr-form-contact">
                                                            <div className="spr-form-contact-name">
                                                                <label className="spr-form-label">Name</label>
                                                                <input
                                                                    type="text"
                                                                    placeholder="Enter your name"
                                                                    className="spr-form-input spr-form-input-text"
                                                                />
                                                            </div>
                                                            <div className="spr-form-contact-email">
                                                                <label className="spr-form-label">Email</label>
                                                                <input
                                                                    className="spr-form-input spr-form-input-email "
                                                                    id="review_email_10508262282"
                                                                    type="email"
                                                                    name="review[email]"
                                                                    value=""
                                                                    placeholder="john.smith@example.com"
                                                                />
                                                            </div>
                                                        </fieldset>
                                                        <fieldset className="spr-form-review">
                                                            <div className="spr-form-review-body">
                                                                <label className="spr-form-label">
                                                                    Body of Review{" "}
                                                                    <span className="spr-form-review-body-charactersremaining">
                                                                        (1500)
                                                                    </span>
                                                                </label>
                                                                <div className="spr-form-input">
                                                                    <textarea
                                                                        className="spr-form-input spr-form-input-textarea "
                                                                        id="review_body_10508262282"
                                                                        data-product-id="10508262282"
                                                                        name="review[body]"
                                                                        rows={10}
                                                                        placeholder="Write your comments here"
                                                                    ></textarea>
                                                                </div>
                                                            </div>
                                                        </fieldset>
                                                        <fieldset className="spr-form-actions">
                                                            <input
                                                                type="submit"
                                                                className="spr-button spr-button-primary button button-primary btn btn-primary black"
                                                                value="Submit Review"
                                                            />
                                                        </fieldset>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : null}
                                        {p.tab3 ? (
                                            <div>
                                                <h3>WOMEN's BODY CHART</h3>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <th>Size</th>
                                                            <th>XS</th>
                                                            <th>S</th>
                                                            <th>M</th>
                                                            <th>L</th>
                                                            <th>XL</th>
                                                        </tr>

                                                        {[
                                                            {
                                                                name: "Chest",
                                                                type: [
                                                                    '31" - 33"',
                                                                    '33" - 35"',
                                                                    '35" - 37"',
                                                                    '37" - 39"',
                                                                    '39" - 42"',
                                                                ],
                                                            },
                                                            {
                                                                name: "Waist",
                                                                type: [
                                                                    '24" - 26"',
                                                                    '26" - 28"',
                                                                    '28" - 30"',
                                                                    '30" - 32"',
                                                                    '32" - 35"',
                                                                ],
                                                            },
                                                            {
                                                                name: "Hip",
                                                                type: [
                                                                    '34" - 36"',
                                                                    '36" - 38"',
                                                                    '38" - 40"',
                                                                    '40" - 42"',
                                                                    '42" - 44"',
                                                                ],
                                                            },
                                                            {
                                                                name: "Regular inseam",
                                                                type: ['30"', '30½"', '31"', '31½"', '32"'],
                                                            },
                                                            {
                                                                name: "Long (Tall) Inseam",
                                                                type: ['31½"', '32"', '32½"', '33"', '33½"'],
                                                            },
                                                        ].map((v, i) => (
                                                            <tr key={i}>
                                                                <td>{v.name}</td>
                                                                {v.type.map((vv, ii) => (
                                                                    <td key={ii}>{vv}</td>
                                                                ))}
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                                <div className="text-center">
                                                    <img src={size} alt="" />
                                                </div>
                                            </div>
                                        ) : null}
                                        {p.tab4 ? (
                                            <div>
                                                <h4>Returns Policy</h4>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    elit. Fusce eros justo, accumsan non dui sit amet.
                                                    Phasellus semper volutpat mi sed imperdiet. Ut odio
                                                    lectus, vulputate non ex non, mattis sollicitudin
                                                    purus. Mauris consequat justo a enim interdum, in
                                                    consequat dolor accumsan. Nulla iaculis diam purus, ut
                                                    vehicula leo efficitur at.
                                                </p>
                                                <p>
                                                    Interdum et malesuada fames ac ante ipsum primis in
                                                    faucibus. In blandit nunc enim, sit amet pharetra erat
                                                    aliquet ac.
                                                </p>
                                                <h4>Shipping</h4>
                                                <p>
                                                    Pellentesque ultrices ut sem sit amet lacinia. Sed
                                                    nisi dui, ultrices ut turpis pulvinar. Sed fringilla
                                                    ex eget lorem consectetur, consectetur blandit lacus
                                                    varius. Duis vel scelerisque elit, et vestibulum
                                                    metus. Integer sit amet tincidunt tortor. Ut lacinia
                                                    ullamcorper massa, a fermentum arcu vehicula ut. Ut
                                                    efficitur faucibus dui Nullam tristique dolor eget
                                                    turpis consequat varius. Quisque a interdum augue. Nam
                                                    ut nibh mauris.
                                                </p>
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                            </Row>
                        </div>
                        <div className="prSidebar sidebar-product">
                            <Col lg="12" md="12" sm="12" className="col-12">
                                <div className="prFeatures">
                                    <Row>
                                        <div className="feature">
                                            <img src={card} alt="Safe Payment" title="Safe Payment" />
                                            <div className="details">
                                                <h5>Safe Payment</h5>Pay with the world's most payment
                                                methods.
                                            </div>
                                        </div>
                                        <div className="feature">
                                            <img src={shield} alt="Confidence" title="Confidence" />
                                            <div className="details">
                                                <h5>Confidence</h5>Protection covers your purchase and
                                                personal data.
                                            </div>
                                        </div>
                                        <div className="feature">
                                            <img
                                                src={worldwide}
                                                alt="Worldwide Delivery"
                                                title="Worldwide Delivery"
                                            />
                                            <div className="details">
                                                <h5>Worldwide Delivery</h5>FREE &amp; fast shipping to
                                                over 200+ countries &amp; regions.
                                            </div>
                                        </div>
                                        <div className="feature">
                                            <img src={phone} alt="Hotline" title="Hotline" />
                                            <div className="details">
                                                <h5>Hotline</h5>Talk to help line for your question on
                                                4141 456 789, 4125 666 888
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                                <div className="related-product grid-products">
                                    <header className="section-header">
                                        <h2 className="section-header__title text-center h2">
                                            <span>Related Products</span>
                                        </h2>
                                        <p className="sub-heading">
                                            You can stop autoplay, increase/decrease aniamtion speed
                                            and number of grid to show and products from store admin.
                                        </p>
                                    </header>
                                    <div className="grid">
                                        {[
                                            {
                                                info: {
                                                    img: s1,
                                                    link: "",
                                                },
                                                details: {
                                                    title: "Cana Skirt",
                                                    price: "173.60",
                                                },
                                            },
                                        ].map((v, i) => (
                                            <div className="grid__item" key={i}>
                                                <div className="mini-list-item">
                                                    <div className="mini-view_image">
                                                        <a className="grid-view-item__link">
                                                            <img
                                                                className="grid-view-item__image"
                                                                src={v.info.img}
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="details">
                                                        <a className="grid-view-item__title">
                                                            {v.details.title}
                                                        </a>
                                                        <div className="grid-view-item__meta">
                                                            <span className="product-price__price">
                                                                <div className="money">{v.details.price}</div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default ProductView;
