import React from 'react';
import { Card } from 'react-bootstrap';
import applyRefinement from './applyRefinement';
import { useDispatch, useSelector } from 'react-redux';

const Sizes = ({ sizes }) => {
  const dispatch = useDispatch();
  const productsReducer = useSelector(state => state.productsReducer);
  const { selectedRefinements, selectedSortingOption } = productsReducer;

  return (
    <Card className="refinement sizes">
      <Card.Header>{sizes.label}</Card.Header>
      <Card.Body>
        <ul className="refinement__values top-level">
          {sizes.values.map(size => (
            <li
              key={size.value}
              className="value"
              data-filter-value={size.value}
              onClick={(e) => applyRefinement(e, dispatch, selectedRefinements, "sizes", selectedSortingOption)}>
              {selectedRefinements.sizes && selectedRefinements.sizes.some(selectedSize => selectedSize === size.value) ? <i className="fas fa-check-square"></i> : <i className="far fa-square"></i>}
              <span className="category-name">{size.label}</span>
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  )
}

export default Sizes;
