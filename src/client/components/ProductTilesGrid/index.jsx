import React, { useState, useEffect } from 'react';
import { getProducts } from '../../services/productAPI';
import Loader from '../Loader';
import ProductTile from '../ProductTile';
import { Col, Row } from 'react-bootstrap';

const ProductTilesGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getProducts("womens-clothing-tops").then(res => {
      setProducts(res);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Loader />
  ) :
    (
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
