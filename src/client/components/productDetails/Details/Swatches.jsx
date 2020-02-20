import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import productActions from '../../../store/actions/productActions';

const Swatches = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const defaultColor = useRef(location.query ? location.query['color'] : null);
  const product = useSelector(state => state.productReducer.currentProduct);

  useEffect(() => {
    if (defaultColor.current && !product.selectedColor) {
      dispatch(productActions.selectColor(defaultColor.current));
      defaultColor.current = null;
    }
  }, [dispatch, product]);

  const clickHandler = (e) => {
    const colorValue = e.currentTarget.dataset.colorValue;
    const isDisabled = e.currentTarget.dataset.disabled;

    if (colorValue !== product.selectedColor && !isDisabled) {
      dispatch(productActions.selectColor(colorValue));
    } else if (colorValue === product.selectedColor) {
      dispatch(productActions.selectColor(null));
    }
  }

  return (
    <div className="color-swatches-wrapper">
      <label>Select Color</label>
      <ul className="color-swatches">
        {product.swatches.map(swatch => (
          <li
            key={swatch.image.title}
            className="color-attribute"
          >
            <div
              className="swatch-wrapper"
              data-color-value={swatch.color_value}
              data-disabled={product.colors.values.some(value => value.value === swatch.color_value && !value.orderable) || null}
              onClick={(e) => clickHandler(e)}
            >
              <img
                src={swatch.image.link}
                alt={swatch.image.alt}
                className="swatch"
                style={{ backgroundImage: `url(${swatch.image.link})` }}
              />
              {product.selectedColor === swatch.color_value ? <span className="checked-mark"></span> : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Swatches;
