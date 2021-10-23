import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const contactUs = () => {
    return (
        <>
            <div className="page-content">
                <div className="page-section-header text-center">
                    <div className="page-title">
                        <div className="wrapper">
                            <h1 className="page-width">Contact Us</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map-section map">
                <iframe
                    src="https://www.google.com/maps/embed?pb="
                    height="350"
                    allowFullScreen
                ></iframe>
                <Container>
                    <Row>
                        <div className="map-section__overlay-wrapper">
                            <div className="map-section__overlay">
                                <h3 className="h4">Our Store</h3>
                                <div className="rte-setting">
                                    <p>
                                        123 Fake St.
                                        <br />
                                        Toronto, Canada
                                    </p>
                                    <p>
                                        Mon - Fri, 10am - 9am
                                        <br />
                                        Saturday, 11am - 9pm
                                        <br />
                                        Sunday, 11am - 5pm
                                    </p>
                                </div>
                                <p>
                                    <Link
                                        to="https://maps.google.com/?daddr=80%20Spadina%20Ave,%20Toronto"
                                        className="btn btn--secondary btn--small"
                                        target="_blank"
                                    >
                                        Get direction
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
            <div className="bredcrumbWrap">
                <Container className="breadcrumbs">
                    <a href="../index.tsx" title="Back to the home page">
                        Home
                    </a>
                    <span aria-hidden="true">›</span>
                    <span>Contact Us</span>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col sm="12" md="8" lg="8" className="col-12 mb-4">
                        <h2>Drop Us A Line</h2>
                        <p>
                            Lorem Ipsum é um texto modelo da indústria tipográfica e de
                            impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por
                            estas indústrias desde o ano de 1500
                        </p>

                        <div className="formFeilds contact-form form-vertical">
                            <form action="http://annimexweb.com/items/belle/assets/php/mail.php" method="post" id="contact_form" className="contact-form">
                                {[
                                    {
                                        type: "text",
                                        id: "ContactFormName",
                                        name: "name",
                                        placeholder: "Name",
                                    },
                                    {
                                        type: "email",
                                        id: "ContactFormEmail",
                                        name: "email",
                                        placeholder: "Email",
                                    },
                                    {
                                        type: "tel",
                                        id: "ContactFormPhone",
                                        name: "phone",
                                        placeholder: "Phone Number",
                                    },
                                    {
                                        type: "text",
                                        id: "ContactSubject",
                                        name: "subject",
                                        placeholder: "Subject",
                                    }
                                ].map((v, i) => (
                                    <Row>
                                        <Col sm="12" md="6" lg="6" className="col-12">
                                            <div className="form-group">
                                                <input required type={v.type} id={v.id} name={v.name} placeholder={v.placeholder} value="" />
                                            </div>
                                        </Col>
                                    </Row>
                                ))}
                                <Row>
                                    <Col sm="12" md="12" lg="12" className="col-12">
                                        <div className="form-group">
                                            <input required id="ContactFormMessage" name="message" placeholder="Your Message" value="" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm="12" md="12" lg="12" className="col-12">
                                        <div className="form-group">
                                            <textarea className="btn" value="Send Message"></textarea>
                                        </div>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                    </Col>
                    <Col sm="12" md="4" lg="4" className="col-12">
                        <div className="open-hours">
                            <strong>Opening Hours</strong><br />
                            Mon - Sat : 9am - 11pm<br />
                            Sunday : 11am - 5pm<br />
                        </div>
                        <hr />
                        <ul className="addressFooter">
                            <li><i className="icon anm anm-map-marker-al"></i><p>55 Gallaxy Enque, 2568 steet, 23568 NY</p></li>
                            <li className="phone"><i className="icon anm anm-phone-s"></i><p>(440) 000 000 0000</p></li>
                            <li className="email"><i className="icon anm anm-envelope-l"></i><p>sales@yousite.com</p></li>
                        </ul>
                        <hr />
                        <ul className="list--inline site-footer__social-icons social-icons">
                            {["facebook", "twitter", "pinterest", "instagram", "Tumblr", "YouTube", "Vimeo"].map((v, i) => (
                                <li key={i}>
                                    {/* webpack.cmd serve --open */}
                                    <a className="social-icons__link" target="_blank" title={"Belle Multipurpose Bootstrap 4 Template on " + v}>
                                        <i className={`icon icon-${v.toLowerCase()}`}></i>
                                        <span className="icon__fallback-text">{v}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default contactUs;
