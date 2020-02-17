import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Sizes from './Sizes';
import Swatches from './Swatches';
import Quantity from './Quantity';
import Promotions from './Promotions';
import Prices from '../../Price';
import AddProductBtn from './AddProductBtn';
import SocialIcons from './SocialIcons';

const Details = () => {
  const { currentProduct, currentVariant } = useSelector(state => state.productReducer);
  const product = currentVariant || currentProduct;

  return (
    <div>
      <h1 className="product-details__title">{product.title}</h1>
      <div className="product-details__number mb-4">Item No. {product.id}</div>
      <div className="product-details__attributes">
        <Swatches />
        <Row className="mb-3">
          <Col xs={8}>
            <Sizes />
          </Col>
          <Col xs={4}>
            <Quantity />
          </Col>
        </Row>
        <Promotions />
        <Prices
          priceMax={product.priceMax}
          priceMin={product.priceMin}
          currency={product.currency}
          listPrice={product.listPrice}
          product_type={product.product_type}
        />
        <AddProductBtn disabled={!currentVariant} />
        <SocialIcons />
      </div>
    </div>
  )
}

export default Details;
