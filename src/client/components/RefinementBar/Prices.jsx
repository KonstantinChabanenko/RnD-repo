import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import applySingleRefinement from './applySingleRefinement';

const Prices = ({ prices }) => {
  const dispatch = useDispatch();
  const productsReducer = useSelector(state => state.productsReducer);
  const { selectedRefinements, selectedSortingOption } = productsReducer;
  
  return (
    <Card className="refinement prices">
      <Card.Header>{prices.label}</Card.Header>
      <Card.Body>
        <ul className="refinement__values top-level">
          {prices.values.map(value => (
            <li
              key={value.value}
              className="value"
              data-filter-value={value.value}
              onClick={(e) => applySingleRefinement(e, dispatch, selectedRefinements, 'price', selectedSortingOption)}
            >
              {selectedRefinements && selectedRefinements.price && (value.value === selectedRefinements.price) ? <i className="fas fa-check-circle"></i> : <i className="far fa-circle"></i>}
              <span className="price-range">{value.label}</span>
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  )
}

export default Prices;
