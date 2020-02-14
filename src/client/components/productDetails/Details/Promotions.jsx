import React from 'react';
import { useSelector } from 'react-redux';
import { Accordion, Card } from 'react-bootstrap';

const Promotions = () => {
  const product = useSelector(state => state.productReducer.currentProduct);

  return (
    <div className="product-details__promotions mb-3">
      <Accordion>
        {product.product_promotions.map((promotion, index) => (
          <Card key={promotion.id}>
            <Accordion.Toggle as={Card.Header} eventKey={index}>
              {promotion.callout_msg}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={index}>
              <Card.Body>{promotion.details}</Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </div>
  )
}

export default Promotions;
