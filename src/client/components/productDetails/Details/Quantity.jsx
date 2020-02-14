import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { FormControl } from 'react-bootstrap';

const Quantity = () => {
  const stockLevel = useSelector(state => {
    const currentVariant = state.productReducer.currentVariant;
    return currentVariant ? currentVariant.stockLevel : null;
  });

  const countQuantity = (num => {
    let items = [];
    for (let i = 0; i < num; i++) {
      items.push(<option key={i} value={i + 1}>{i + 1}</option>)
    }

    return items;
  });

  return stockLevel ? (
    <Fragment>
      <label>Quantity</label>
      <FormControl
        as="select"
      >
        {stockLevel >= 10 ? countQuantity(10) : countQuantity(stockLevel)}
      </FormControl>
    </Fragment>
  ) : null;
}

export default Quantity;
