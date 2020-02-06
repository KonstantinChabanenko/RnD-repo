import React from 'react';
import { Card } from 'react-bootstrap';
import applySingleRefinement from './applySingleRefinement';

const Prices = ({ prices, selectedRefinements, setSelectedRefinements }) => (
  <Card className="refinement prices">
    <Card.Header>{prices.label}</Card.Header>
    <Card.Body>
      <ul className="refinement__values top-level">
        {prices.values.map(value => (
          <li
            key={value.value}
            className="value"
            data-filter-value={value.value}
            onClick={(e) => applySingleRefinement(e, selectedRefinements, setSelectedRefinements, "price")}
          >
            {selectedRefinements.price && (value.value === selectedRefinements.price) ? <i className="fas fa-check-circle"></i> : <i className="far fa-circle"></i>}
            <span className="price-range">{value.label}</span>
          </li>
        ))}
      </ul>
    </Card.Body>
  </Card>
)

export default Prices;
