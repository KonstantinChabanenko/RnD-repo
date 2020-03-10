import React from 'react';
import { useDispatch } from 'react-redux';
import { FormControl } from 'react-bootstrap';
import { setProductAttribute } from '../../../scripts/product/productHelper';

const Quantities = ({ quantities }) => {
  const dispatch = useDispatch();
  const selectQuantity = (e) => {
    const sel = e.currentTarget;
    const { url } = sel.options[sel.selectedIndex].dataset;

    setProductAttribute(url, dispatch);
  }

  return quantities ? (
    <div className="quantities">
      <label>Quantity</label>
      <FormControl
        as="select"
        onChange={selectQuantity}
      >
        {
          quantities.map(quantity => (
            <option
              selected={quantity.selected}
              data-url={quantity.url}
            >
                {quantity.value}
            </option>
          ))
        }
      </FormControl>
    </div>
  ) : null;
}

export default Quantities;
