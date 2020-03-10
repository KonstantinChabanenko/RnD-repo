import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { FormControl } from 'react-bootstrap';
import { setProductAttribute } from '../../../scripts/product/productHelper';

const Sizes = ({ sizes }) => {
  const dispatch = useDispatch();
  const selectSize = (e) => {
    const sel = e.currentTarget;
    const { url } = sel.options[sel.selectedIndex].dataset;

    setProductAttribute(url, dispatch);
  }

  return sizes ? (
    <Fragment>
      <label>Select Size</label>
      <FormControl
        as="select"
        defaultValue=""
        onChange={selectSize}
      >
        <option
          value=""
          data-url={sizes.resetUrl}
        >
          Select Size
        </option>
        {
          sizes.values ? sizes.values.map(size => (
            <option
              key={size.id}
              value={size.value}
              disabled={!size.selectable}
              data-url={size.url}
            >
              {size.displayValue}
            </option>
          )) : null
        }
      </FormControl>
    </Fragment>
  ) : null;
}

export default Sizes;
