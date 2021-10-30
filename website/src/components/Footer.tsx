import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from "react-bootstrap"
import pay from "../assets/images/safepayment.png"
import $ from "jquery"
const Footer = () => {
    React.useEffect(() => {
        $(".footer-links .h4").on('click', function () {
            const kk: any = $(window).width()
            if (kk < 766) {
                $(this).next().slideToggle();
                $(this).toggleClass("active");
            }
        });
        var resizeTimer: any;
        $(window).resize(function (e) {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
                $(window).trigger('delayed-resize', e);
            }, 250);
        });
        $(window).on("load resize", function (e) {
            const kk: any = $(window).width()

            if (kk > 766) {
                $(".footer-links ul").show();
            }
            else {
                $(".footer-links ul").hide();
            }
        });
    }, [])
    return (
        <footer id="footer" className="footer-5">
            <div className="site-footer">
                <Container>
                    <hr />
                    <div className="footer-bottom">
                        <Row>
                            <Col sm="12" md="6" lg="6" className="col-12 order-1 order-md-0 order-lg-0 order-sm-1 copyright text-sm-center text-md-left text-lg-left">
                                <span></span>
                                <Link to="/">T&C</Link>
                            </Col>
                            <Col md="6" sm="12" lg="6" className="col-12 order-0 order-md-1 order-lg-1 order-sm-0 payment-icons text-right text-md-center">
                                <img src='static/assets/images/safepayment.png' alt="Payment" />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </footer>
    )
}

export default Footer
