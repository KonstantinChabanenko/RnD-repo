import React from 'react';
import { useDispatch } from 'react-redux';
import { setProductAttribute } from '../../../scripts/product/productHelper';

const Swatches = ({ swatches }) => {
  const dispatch = useDispatch();

  const selectSwatch = (e) => {
    const { url, disabled } = e.currentTarget.dataset;

    if (disabled !== "true") {
      setProductAttribute(url, dispatch);
    }
  }

  return swatches && swatches.swatchable ? (
    <div className="product-details__swatches color-swatches-wrapper">
      <label>Select Color</label>
      <ul className="color-swatches">
        {
          swatches.values.map(swatch => (
            <li
              key={swatch.id}
              className="color-attribute"
            >
              <div
                className="swatch-wrapper"
                data-url={swatch.url}
                data-disabled={!swatch.selectable}
                onClick={selectSwatch}
              >
                <img
                  src={swatch.images.swatch[0].absURL}
                  alt={swatch.images.swatch[0].alt}
                  className="swatch"
                  style={{ backgroundImage: `url(${swatch.images.swatch[0].absURL})` }}
                />
                {swatch.selected ? <span className="checked-mark"></span> : null}
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  ) : null;
}

export default Swatches;
