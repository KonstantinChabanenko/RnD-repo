import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

const Promotions = ({ promotions }) => (
    <div>
        <Accordion>
            {promotions.map((promotion, index) => (
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

export default Promotions;
