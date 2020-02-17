import React, { Fragment } from 'react';
import { FormControl } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import productActions from '../../../store/actions/productActions';

const Sizes = () => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.productReducer.currentProduct);

  const selectAttrHandler = (e) => {
    const sizeValue = e.currentTarget.value;
    if (product && sizeValue !== product.selectedSize) {
      dispatch(productActions.selectSize(sizeValue));
    }
  }

  return (
    <Fragment>
      <label>Select Size</label>
      <FormControl
        as="select"
        defaultValue=""
        onChange={e => selectAttrHandler(e)}
      >
        <option value="">Select Size</option>
        {product.sizes ? product.sizes.values.map(size => (
          <option
            key={size.value}
            value={size.value}
            disabled={!size.orderable}
          >
            {size.name}
          </option>
        )) : null}
      </FormControl>
    </Fragment>
  )
}

export default Sizes;
