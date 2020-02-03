import React from 'react';
import ProductTile from '../ProductTile';
import { Col, Row } from 'react-bootstrap';

const ProductTilesGrid = ({ products }) => (
  <Row>
    {products.map(product => (
      <Col xs sm={4} key={product.id}>
        <ProductTile product={product} />
      </Col>
    ))}
  </Row>
)

export default ProductTilesGrid;
