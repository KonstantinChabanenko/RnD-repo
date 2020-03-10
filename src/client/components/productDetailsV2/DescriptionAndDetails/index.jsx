import React from 'react';
import { Row, Col } from 'react-bootstrap';

const DescriptionAndDetails = ({ longDescription, shortDescription }) => (
  <div>
    {longDescription ? (
      <Row>
        <Col xs={12} md={4} lg={3}><h2 className="title">Description</h2></Col>
        <Col xs={12} md={8} lg={9}>
          <div className="content h-100 d-flex align-items-center">{longDescription}</div>
        </Col>
      </Row>
    ) : null}
    {shortDescription ? (
      <Row>
        <Col xs={12} md={4} lg={3}><h2 className="title">Details</h2></Col>
        <Col xs={12} md={8} lg={9}>
          <div className="content h-100 d-flex align-items-center">{shortDescription}</div>
        </Col>
      </Row>
    ) : null}
  </div>
)

export default DescriptionAndDetails;
