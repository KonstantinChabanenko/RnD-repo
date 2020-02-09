import React from 'react';
import { Row, Col } from 'react-bootstrap';

const DescriptionAndDetails = ({ shortDescription, longDescription }) => (
    <div>
        <Row>
            <Col xs={12} md={4} lg={3}>Description</Col>
            <Col xs={12} md={8} lg={9}>{shortDescription}</Col>
        </Row>
        <Row>
            <Col xs={12} md={4} lg={3}>Details</Col>
            <Col xs={12} md={8} lg={9}>{longDescription}</Col>
        </Row>
    </div>
)

export default DescriptionAndDetails;
