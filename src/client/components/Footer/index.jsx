import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
    <div className="footer mt-3">
        <Container>
            <div className="footer__content py-5">
                <Row>
                    <Col xs={3}>
                        <div className="locale-store">
                            <a href="#" className="footer__link">Locate Store</a>
                            <p className="mt-2">
                                The Store Locator is designed to help you find the closest store near you.
                            </p>
                        </div>
                    </Col>
                    <Col xs={3}>
                        <ul className="footer__items">
                            <li className="footer__item"><span className="footer__title">Account</span></li>
                            <li className="footer__item"><a href="#" className="footer__link">My Account</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Check Order</a></li>
                        </ul>
                    </Col>
                    <Col xs={3}>
                        <ul className="footer__items">
                            <li className="footer__item"><span className="footer__title">Customer Service</span></li>
                            <li className="footer__item"><a href="#" className="footer__link">Contact Us</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Gift Certificates</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Help</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Site Map</a></li>
                        </ul>
                    </Col>
                    <Col xs={3}>
                        <ul className="footer__items">
                            <li className="footer__item"><span className="footer__title">About</span></li>
                            <li className="footer__item"><a href="#" className="footer__link">About Us</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Privacy</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Jobs</a></li>
                        </ul>
                    </Col>
                </Row>
                <hr class="hidden-xs-down my-5"></hr>
                <Row>
                    <Col xs={4}>
                        <div className="social-icons">
                            <i className="fab fa-pinterest social-icon"></i>
                            <i className="fab fa-facebook-square social-icon"></i>
                            <i className="fab fa-twitter social-icon"></i>
                            <i className="fas fa-link social-icon"></i>
                            <a href="#top" className="back-to-top">
                                <i class="fas fa-circle fa-inverse"></i>
                                <i class="fas fa-arrow-up"></i>
                            </a>
                        </div>
                    </Col>
                    <Col xs={8}>
                        <div class="content-asset">
                            <div class="copyright mb-2">© 2004-2019 Salesforce. All Rights Reserved.</div>
                            <div class="postscript">This is a demo store only. Orders made will NOT be processed.</div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </div>
)

export default Footer;
