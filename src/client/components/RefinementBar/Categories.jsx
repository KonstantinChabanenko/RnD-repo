import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import applySingleRefinement from './applySingleRefinement';

const Categories = ({ categories }) => {
  const dispatch = useDispatch();
  const productsReducer = useSelector(state => state.productsReducer);
  const { selectedRefinements, selectedSortingOption } = productsReducer;
  
  const showCategories = (values) => {
    const newarr = values.map(value => {
      if (value.values) {
        return (
          <li
            key={value.value}
            className="value"
            data-filter-value={value.value}
            onClick={(e) => applySingleRefinement(e, dispatch, selectedRefinements, 'categoryId', selectedSortingOption)}
          >
            {selectedRefinements && selectedRefinements.categoryId && value.value === selectedRefinements.categoryId ? <i className="fas fa-check-circle"></i> : <i className="far fa-circle"></i>}
            <span className="category-name">{value.label}</span>
            <ul className="refinement__values">{showCategories(value.values)}</ul>
          </li>
        )
      }

      return (
        <li
          key={value.value}
          className="value"
          data-filter-value={value.value}
          onClick={(e) => applySingleRefinement(e, dispatch, selectedRefinements, 'categoryId')}
        >
          {selectedRefinements && selectedRefinements.categoryId && value.value === selectedRefinements.categoryId ? <i className="fas fa-check-circle"></i> : <i className="far fa-circle"></i>}
          <span className="category-name">{value.label}</span>
        </li>
      )
    });

    return newarr;
  }

  return (
    <Card className="refinement categories">
      <Card.Header>{categories.label}</Card.Header>
      <Card.Body>
        <ul className="refinement__values top-level">
          {showCategories(categories.values)}
        </ul>
      </Card.Body>
    </Card>
  )
}

export default Categories;
