import React from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import productActions from '../../store/actions/productActions';

const GridHeader = () => {
  const dispatch = useDispatch();
  const productsReducer = useSelector(state => state.productsReducer);
  const { selectedRefinements, selectedSortingOption, sortingOptions } = productsReducer;
  const setSortingOption = (value) => {
    dispatch(productActions.selectSortingOption(selectedRefinements, value));
  }

  return (
    <Row className="mb-4">
      <Col md={3}>
        <Form.Control
          as="select"
          onChange={(e) => setSortingOption(e.target.value)}
          value={selectedSortingOption}
        >
          {sortingOptions.map(option => (
            <option
              key={option.id}
              value={option.id}
            >
              {option.label}
            </option>
          ))}
        </Form.Control>
      </Col>
      <Col md={9}></Col>
    </Row>
  )
}

export default GridHeader;
