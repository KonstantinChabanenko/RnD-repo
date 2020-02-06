import React from 'react';
import { Card } from 'react-bootstrap';

const NewArrival = ({ filter, selectedRefinements, setSelectedRefinements }) => (
  <Card className="refinement new-arrival">
    <Card.Header>{filter.label}</Card.Header>
    <Card.Body>
      <ul className="refinement__values top-level">
        <li
          className="value"
          onClick={() => setSelectedRefinements(prevState => ({ ...prevState, isNew: !prevState.isNew }))}
        >
          {selectedRefinements.isNew ? <i className="fas fa-check-square"></i> : <i className="far fa-square"></i>}
          <span>{filter.label}</span>
        </li>
      </ul>
    </Card.Body>
  </Card>
)

export default NewArrival;
