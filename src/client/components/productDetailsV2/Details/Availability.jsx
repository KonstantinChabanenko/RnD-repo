import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Availability = ({ readyToOrder, available }) => (
  <div className="product-details__availability mb-4">
    <Row>
      <Col xs={4}>Availability:</Col>
      <Col xs={8}>
        <span className="availability__msg">
          {readyToOrder && available ? "In Stock" : "Select Styles for Availability"}
        </span>
      </Col>
    </Row>
  </div>
)

export default Availability;
