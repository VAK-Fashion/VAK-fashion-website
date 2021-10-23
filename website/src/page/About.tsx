import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { Link } from 'react-router-dom'
import about1 from "../assets/images/about1.jpg"
import about2 from "../assets/images/about2.jpg"
import about3 from "../assets/images/about3.jpg"
const About = () => {
    return (
        <div id="page-content">
            <div className="page section-header text-center">
                <div className="page-title">
                    <div className="wrapper">
                        <h1 className="page-width">
                            About Us
                        </h1>
                    </div>
                </div>
            </div>
            <Container>
                <Row>
                    <Col sm="12" md="12" lg="12" className="main-col col-12">
                        <div className="text-center mb-4">
                            <h2 className="h2">
                                VFK
                            </h2>
                            <div className="rte-setting">
                                <p>
                                    <strong>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae rerum eaque sint autem sequi alias ipsa unde quidem modi in reprehenderit, quam deserunt, tempora, esse assumenda fugiat voluptatem fuga minus?
                                    </strong>
                                </p>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa voluptatum eum voluptas minus quos corporis sapiente, quasi inventore velit labore, debitis eos?
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm="4" lg="4" md="4" className="col-12 mb-4">
                        <img className="blur-up lazyload" data-src={about1} src={about1} />
                    </Col>
                    <Col sm="4" lg="4" md="4" className="col-12 mb-4">
                        <img className="blur-up lazyload" data-src={about2} src={about2} />
                    </Col>
                    <Col sm="4" lg="4" md="4" className="col-12 mb-4">
                        <img className="blur-up lazyload" data-src={about3} src={about3} />
                    </Col>
                </Row>
                <Row>
                    <Col className="col-12">
                        <h2>Sed ut perspiciatis unde omnis iste natus error</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain.</p>
                        <p>simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.</p>
                        <p></p>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md="6" lg="6" className="col-12 mb-4">
                        <h2 className="h2">About VFK</h2>
                        <div className="rte-setting">
                            <p>
                                <strong>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis sapiente ab beatae consequatur, earum officia, ullam maiores quaerat dolore nulla blanditiis veniam ratione eius quas tenetur impedit ex officiis accusamus.
                                </strong>
                            </p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores esse deleniti, iste amet mollitia incidunt. Voluptatem similique quaerat quidem? Dicta dignissimos rerum esse! Praesentium tempora debitis maxime et iure eaque.</p>
                        <p></p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem velit nobis quaerat?</p>
                    </Col>
                    <Col sm="12" md="6" lg="6" className="col-12">
                        <h2 className="h2">
                            Contact Us
                        </h2>
                        <ul className="addressFooter">
                            <li><i className="icon anm anm-map-marker-al"></i> ADDress</li>
                            <li className="phone"><i className="icon anm anm-phone-s"></i>  Phone No</li>
                            <li className="email"><i className="icon anm anm-envelope-l"></i>  Email</li>
                        </ul>
                        <hr />
                        <ul className="list--inline site-footer__social-icons social-icons">
                            <li><Link className="social-icons__link" to="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Facebook"><i className="icon icon-facebook"></i></Link></li>
                            <li><Link className="social-icons__link" to="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Twitter"><i className="icon icon-twitter"></i> <span className="icon__fallback-text">Twitter</span></Link></li>
                            <li><Link className="social-icons__link" to="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Pinterest"><i className="icon icon-pinterest"></i> <span className="icon__fallback-text">Pinterest</span></Link></li>
                            <li><Link className="social-icons__link" to="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Instagram"><i className="icon icon-instagram"></i> <span className="icon__fallback-text">Instagram</span></Link></li>
                            <li><Link className="social-icons__link" to="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Tumblr"><i className="icon icon-tumblr-alt"></i> <span className="icon__fallback-text">Tumblr</span></Link></li>
                            <li><Link className="social-icons__link" to="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on YouTube"><i className="icon icon-youtube"></i> <span className="icon__fallback-text">YouTube</span></Link></li>
                            <li><Link className="social-icons__link" to="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Vimeo"><i className="icon icon-vimeo-alt"></i> <span className="icon__fallback-text">Vimeo</span></Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About
