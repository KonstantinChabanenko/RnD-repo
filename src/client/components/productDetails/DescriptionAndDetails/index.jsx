import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

const DescriptionAndDetails = () => {
  const { currentProduct, currentVariant } = useSelector(state => state.productReducer);

  return (
    <div>
      <Row>
        <Col xs={12} md={4} lg={3}><h2 className="title">Description</h2></Col>
        <Col xs={12} md={8} lg={9}>
          <div className="content h-100 d-flex align-items-center">{currentVariant ? currentVariant.short_description : currentProduct.short_description}</div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4} lg={3}><h2 className="title">Details</h2></Col>
        <Col xs={12} md={8} lg={9}>
          <div className="content h-100 d-flex align-items-center">{currentVariant ? currentVariant.long_description : currentProduct.long_description}</div>
        </Col>
      </Row>
    </div>
  )
}

export default DescriptionAndDetails;
