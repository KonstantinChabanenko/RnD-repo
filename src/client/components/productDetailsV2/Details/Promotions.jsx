import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

const Promotions = ({ promotions }) => {
  return promotions ? (
    <div className="product-details__promotions mb-4">
      {promotions.map((promotion, index) => (
        <Accordion>
          <Card key={promotion.id}>
            <Accordion.Toggle as={Card.Header} eventKey={index}>
              {promotion.calloutMsg}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={index}>
              <Card.Body>{promotion.details}</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </div>
  ) : null;
}

export default Promotions;
