import React from 'react'
import { Col, Container, Row } from "react-bootstrap"
import { Link } from 'react-router-dom'
const NotFound = () => {
    return (
        <Container>
            <Row>
                <Col sm="12" md="12" lg="12" className="col-12">
                    <div className="empty-page-content text-center">
                        <h1>404 Page Not Found</h1>
                        <p>The page you requested does not exist.</p>
                        <p><Link to="/" className="btn btn--has-icon-after">Continue shopping <i className="fa fa-caret-right" aria-hidden="true"></i></Link></p>

                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound
