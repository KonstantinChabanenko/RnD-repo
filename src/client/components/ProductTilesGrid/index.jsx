import React from 'react';
import ProductTile from '../ProductTile';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ProductTilesGrid = () => {
  const products = useSelector(state => state.productsReducer.products);
  
  return (
    <Row>
      {products.map(product => (
        <Col xs sm={4} key={product.id}>
          <ProductTile product={product} />
        </Col>
      ))}
    </Row>
  )
}

export default ProductTilesGrid;
