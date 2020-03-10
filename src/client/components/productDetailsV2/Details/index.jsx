import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Swatches from './Swatches';
import Sizes from './Sizes';
import Quantities from './Quantities';
import Availability from './Availability';
import Promotions from './Promotions';
import Price from './Price';
import AddProductBtn from './AddProductBtn';
import SocialIcons from './SocialIcons';

const Details = ({ product }) => (
  <div>
    <h1 className="product-details__title">{product.pageTitle}</h1>
    <div className="product-details__number mb-4">Item No. {product.id}</div>
    <div className="product-details__attributes">
      <Swatches swatches={product.variationAttributes.find(attr => attr.attributeId === 'color')} />
      <Row className="mb-3">
        <Col xs={8}>
          <Sizes sizes={product.variationAttributes.find(attr => attr.attributeId === 'size')} />
        </Col>
        <Col xs={4}>
          <Quantities quantities={product.quantities} />
        </Col>
      </Row>
      <Availability
        readyToOrder={product.readyToOrder}
        available={product.available}
      />
      <Promotions promotions={product.promotions} />
      <Price price={product.price} />
      <AddProductBtn disabled={!product.readyToOrder} />
      <SocialIcons />
    </div>
  </div>
)

export default Details;
