import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../assets/images/product-images/product-image8.jpg";
import img2 from "../assets/images/product-images/product-image4.jpg";
import img3 from "../assets/images/product-images/product-image5.jpg";
const Wishlist = () => {
    return (
        <div id="page-content">
            <div className="page section-header text-center">
                <div className="page-title">
                    <div className="wrapper">
                        <h1 className="page-width">Wish List</h1>
                    </div>
                </div>
            </div>
            <Container>
                <Row>
                    <Col sm="12" md="12" lg="12" className="main-col col-12">
                        <form>
                            <div className="wishlist-table tab-content table-responsive">
                                <Table bordered>
                                    <thead>
                                        <tr>
                                            {[
                                                "Remove",
                                                "Images",
                                                "Product",
                                                "Unit Price",
                                                "Stock Status",
                                                "Add to Cart",
                                            ].map((v, i) => (
                                                <th
                                                    key={i}
                                                    className="product-name text-center alt-font"
                                                >
                                                    {v}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            {
                                                product: {
                                                    name: "Minerva Dress black",
                                                    amount: "165.00",
                                                    inStock: true,
                                                    img: img1,
                                                },
                                            },
                                            {
                                                product: {
                                                    name: "Sueded Cotton Pant in Khaki",
                                                    amount: "150.00",
                                                    inStock: false,
                                                    img: img2,
                                                },
                                            },
                                            {
                                                product: {
                                                    name: "Woven Solid Midi Shirt Dress",
                                                    amount: "150.00",
                                                    inStock: true,
                                                    img: img3,
                                                },
                                            },
                                        ].map((v, i) => (
                                            <tr>
                                                <td
                                                    className="product-remove text-center"
                                                    valign="middle"
                                                >
                                                    <Link to="#">
                                                        <i className="icon icon anm anm-times-l"></i>
                                                    </Link>
                                                </td>
                                                <td className="product-thumbnail text-center">
                                                    <Link to="#">
                                                        <img src={v.product.img} />
                                                    </Link>
                                                </td>
                                                <td className="product-name text-center">
                                                    <h4 className="no-margin">
                                                        <Link to="#">{v.product.name}</Link>
                                                    </h4>
                                                </td>
                                                <td className="product-price text-center">
                                                    <span className="amount">{v.product.amount}</span>
                                                </td>
                                                <td className="stock text-center">
                                                    {v.product.inStock ? (
                                                        <span className="in-stock">in stock</span>
                                                    ) : (
                                                        <span className="out-stock">Out of stock</span>
                                                    )}
                                                </td>
                                                <td className="prodict-subtotal text-center">
                                                    <button className="btn btn-small">Add To Cart</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Wishlist;
