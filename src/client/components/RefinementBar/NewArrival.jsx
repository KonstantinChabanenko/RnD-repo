import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import productActions from '../../store/actions/productActions';

const NewArrival = ({ isNew }) => {
  const dispatch = useDispatch();
  const productsReducer = useSelector(state => state.productsReducer);
  const { selectedRefinements, selectedSortingOption } = productsReducer;
  const isNewValue = selectedRefinements.isNew;

  const applyRefinement = () => {
    dispatch(productActions.selectRefinement('isNew', isNewValue ? false : true, selectedRefinements, selectedSortingOption));
  }
  
  return (
    <Card className="refinement new-arrival">
      <Card.Header>{isNew.label}</Card.Header>
      <Card.Body>
        <ul className="refinement__values top-level">
          <li
            className="value"
            onClick={applyRefinement}
          >
            {isNewValue ? <i className="fas fa-check-square"></i> : <i className="far fa-square"></i>}
            <span>{isNew.label}</span>
          </li>
        </ul>
      </Card.Body>
    </Card>
  )
}

export default NewArrival;
