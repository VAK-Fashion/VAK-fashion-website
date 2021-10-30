import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const cart = () => {
    return (
        <div>
            <div id="page-content">
                <div className="page section-header text-center">
                    <div className="page-title">
                        <div className="wrapper">
                            <h1 className="page-width">Your Cart</h1>
                        </div>
                    </div>
                </div>
                <Container>
                    <Row>
                        <Col sm="12" md="8" lg="8" className="col-12 main-col">
                            <form action="#" className="cart style2">
                                <table>
                                    <thead className="cart__row cart__header">
                                        <tr>
                                            <th colSpan={2} className="textcenter">
                                                Prodcut
                                            </th>
                                            <th className="text-center">Price</th>
                                            <th className="text-center">Quantity</th>
                                            <th className="text-right">Total</th>
                                            <th className="action">&nbsp;</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="cart__row border-bottom line1 cart-flex border-top">
                                            <td className="cart__image-wrapper cart-flex-item">
                                                <a href="#">
                                                    <img
                                                        className="cart_image"
                                                        src="./assets/images/product-images/product-image1.jpg"
                                                        alt="Elastic Waist Dress - Navy / Small"
                                                    />
                                                </a>
                                            </td>
                                            <td className="cart__meta small--text-left cart-flex-item">
                                                <div className="list-view-item__title">
                                                    <a href="#">Elastic Waist Dress</a>
                                                </div>
                                                <div className="cart__meta-text">
                                                    Color: Navy
                                                    <br />
                                                    Size: Small
                                                    <br />
                                                </div>
                                            </td>
                                            <td className="cart__price-wrapper cart-flex-item">
                                                <span className="money">$735.00</span>
                                            </td>
                                            <td className="cart__update-wrapper cart-flex-item texr-right">
                                                <div className="cart__qty text-center">
                                                    <div className="qtyField">
                                                        <a
                                                            href="javascript:void(0);"
                                                            className="qtyBtn minus"
                                                        >
                                                            <i className="icon icon-minus"></i>
                                                        </a>
                                                        <input
                                                            className="cart__qty qty"
                                                            type="text"
                                                            name="updates[]"
                                                            id="qty"
                                                            value="1"
                                                            pattern="[0-9]*"
                                                        />
                                                        <a
                                                            href="javascript:void(0);"
                                                            className="qtyBtn plus"
                                                        >
                                                            <i className="icon icon-plus"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-right small--hide cart-price">
                                                <div>
                                                    <span className="money">$7335.00</span>
                                                </div>
                                            </td>
                                            <td className="text-center small--hide">
                                                <a
                                                    href="#"
                                                    className="btn btn--secondary cart__remove"
                                                    title="Remove tem"
                                                >
                                                    <i className="icon icon anm anm-times-l"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="cart__row border-bottom line1 cart-flex border-top">
                                            <td className="cart__image-wrapper cart-flex-item">
                                                <a href="#">
                                                    <img
                                                        className="cart__image"
                                                        src="assets/images/product-images/product-image3.jpg"
                                                        alt="3/4 Sleeve Kimono Dress"
                                                    />
                                                </a>
                                            </td>
                                            <td className="cart__meta small--text-left cart-flex-item">
                                                <div className="list-view-item__title">
                                                    <a href="#">3/4 Sleeve Kimono Dress</a>
                                                </div>
                                            </td>
                                            <td className="cart__price-wrapper cart-flex-item">
                                                <span className="money">$735.00</span>
                                            </td>
                                            <td className="cart__update-wrapper cart-flex-item text-right">
                                                <div className="cart__qty text-center">
                                                    <div className="qtyField">
                                                        <a
                                                            className="qtyBtn minus"
                                                            href="javascript:void(0);"
                                                        >
                                                            <i className="icon icon-minus"></i>
                                                        </a>
                                                        <input
                                                            className="cart__qty-input qty"
                                                            type="text"
                                                            name="updates[]"
                                                            id="qty"
                                                            value="1"
                                                            pattern="[0-9]*"
                                                        />
                                                        <a
                                                            className="qtyBtn plus"
                                                            href="javascript:void(0);"
                                                        >
                                                            <i className="icon icon-plus"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-right small--hide cart-price">
                                                <div>
                                                    <span className="money">$735.00</span>
                                                </div>
                                            </td>
                                            <td className="text-center small--hide">
                                                <a
                                                    href="#"
                                                    className="btn btn--secondary cart__remove"
                                                    title="Remove tem"
                                                >
                                                    <i className="icon icon anm anm-times-l"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="cart__row border-bottom line1 cart-flex border-top">
                                            <td className="cart__image-wrapper cart-flex-item">
                                                <a href="#">
                                                    <img
                                                        className="cart__image"
                                                        src="assets/images/product-images/product-image6.jpg"
                                                        alt="Minerva Dress black"
                                                    />
                                                </a>
                                            </td>
                                            <td className="cart__meta small--text-left cart-flex-item">
                                                <div className="list-view-item__title">
                                                    <a href="#">Minerva Dress black</a>
                                                </div>
                                            </td>
                                            <td className="cart__price-wrapper cart-flex-item">
                                                <span className="money">$526.00</span>
                                            </td>
                                            <td className="cart__update-wrapper cart-flex-item text-right">
                                                <div className="cart__qty text-center">
                                                    <div className="qtyField">
                                                        <a
                                                            className="qtyBtn minus"
                                                            href="javascript:void(0);"
                                                        >
                                                            <i className="icon icon-minus"></i>
                                                        </a>
                                                        <input
                                                            className="cart__qty-input qty"
                                                            type="text"
                                                            name="updates[]"
                                                            id="qty"
                                                            value="1"
                                                            pattern="[0-9]*"
                                                        />
                                                        <a
                                                            className="qtyBtn plus"
                                                            href="javascript:void(0);"
                                                        >
                                                            <i className="icon icon-plus"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-right small--hide cart-price">
                                                <div>
                                                    <span className="money">$735.00</span>
                                                </div>
                                            </td>
                                            <td className="text-center small--hide">
                                                <a
                                                    href="#"
                                                    className="btn btn--secondary cart__remove"
                                                    title="Remove tem"
                                                >
                                                    <i className="icon icon anm anm-times-l"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan={3} className="text-left">
                                                <a
                                                    href="http://annimexweb.com/"
                                                    className="btn--link cart-continue"
                                                >
                                                    <i className="icon icon-arrow-circle left"></i>Contine
                                                    shopping
                                                </a>
                                            </td>
                                            <td colSpan={3} className="text-right">
                                                <button
                                                    className="btn--link cart-continue"
                                                    type="submit"
                                                    name="update"
                                                >
                                                    <i className="fa fa-refresh"></i>Update
                                                </button>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                                <div className="currencymsg">
                                    We processes all orders in USD. While the content of your cart
                                    is currently displayed in USD, the checkout will use USD at
                                    the most current exchange rate.
                                </div>
                                <hr />
                                <div id="shipping-calculator" className="mb-4">
                                    <h5 className="small--text-center">Get shipping estimates</h5>
                                    <Row>
                                        <Col sm="12" md="4" className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="address_country">Country</label>
                                                <select
                                                    name="address[country]"
                                                    id="address_country"
                                                    data-default="United States"
                                                >
                                                    <option value="Belgium" data-provinces="[]">
                                                        Belgium
                                                    </option>
                                                    <option value="---" data-provinces="[]">
                                                        ---
                                                    </option>
                                                    {[
                                                        "Afghanistan",
                                                        "Aland Island",
                                                        "Albania",
                                                        "Algeria",
                                                    ].map((v, i) => (
                                                        <option value={v} data-provinces="[]">
                                                            {v}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </Col>
                                        <Col sm="12" md="4" className="col-12">
                                            <div className="form-group">
                                                <label>State</label>
                                                <select
                                                    name="address[provience]"
                                                    data-default=""
                                                    id="address_provience"
                                                >
                                                    {[
                                                        "Alabama",
                                                        "Alaska",
                                                        "American Samoa",
                                                        "Arizona",
                                                    ].map((v, i) => (
                                                        <option value={v}>{v}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </Col>
                                        <Col className="col-12" sm="12" md="4">
                                            <div className="form-group">
                                                <label htmlFor="address zip">Postal/Zip Code</label>
                                                <input
                                                    type="text"
                                                    id="address_zip"
                                                    name="address[zip]"
                                                />
                                            </div>
                                        </Col>
                                        <Col
                                            className="col-12 actionRow text-center"
                                            sm="12"
                                            md="12"
                                        >
                                            <div>
                                                <input
                                                    type="button"
                                                    className="btn btn--secondary get-rates"
                                                    value="Calculate shipping"
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </form>
                        </Col>
                        <Col className="col-12 cart__footer" sm="12" md="4" lg="4">
                            <div className="cart-note">
                                <div className="solid-border">
                                    <h5>
                                        <label
                                            htmlFor="CartSpecialInstructions"
                                            className="cart-note__label small--text-center"
                                        >
                                            Add a note to your order
                                        </label>
                                    </h5>
                                    <textarea
                                        name="note"
                                        id="CartSpecialInstructions"
                                        cols={30}
                                        rows={10}
                                        className="cart-note__input"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="solid-border">
                                <Row>
                                    <span className="col-12 col-sm-6 cart__subtotal-title">
                                        <strong>Subtotal</strong>
                                    </span>
                                    <span className="col-12 col-sm-6 cart__subtotal-title cart__subtotal text-right">
                                        <span className="money">$735.00</span>
                                    </span>
                                </Row>
                                <div className="cart__shipping">
                                    Shipping &amp; taxes calculated at checkout
                                </div>
                                <p className="cart_team">
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="tearm"
                                            value="tearm"
                                            id="cartTearm"
                                            className="checkbox"
                                            required
                                        />{" "}
                                        I agree with the terms and and conditions
                                    </label>
                                </p>
                                <input
                                    type="submit"
                                    name="checkout"
                                    id="cartCheckout"
                                    className="btn btn--small-wide checkout"
                                    value="Checkout"
                                />
                                <div className="paymnet-img">
                                    <img src="assets/images/payment-img.jpg" alt="Payment" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default cart;
