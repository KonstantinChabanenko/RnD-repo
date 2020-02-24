import React from 'react';
import { Card } from 'react-bootstrap';
import applyRefinement from './applyRefinement';
import { useDispatch, useSelector } from 'react-redux';

const Colors = ({ colors }) => {
  const dispatch = useDispatch();
  const productsReducer = useSelector(state => state.productsReducer);
  const { selectedRefinements, selectedSortingOption } = productsReducer;

  return (
    <Card className="refinement colors">
      <Card.Header>{colors.label}</Card.Header>
      <Card.Body>
        <ul className="refinement__values top-level">
          {colors.values.map(color => {
            const disabled = color.hit_count === 0;

            return (
              <li key={color.value} className="color-attribute">
                <div className="swatch-wrapper"
                  data-filter-value={color.value}
                  onClick={(e) => {
                    if (!disabled) {
                      applyRefinement(e, dispatch, selectedRefinements || {}, "colors", selectedSortingOption)}
                    }
                  }
                >
                  <span
                    className={`value swatch-circle swatch-circle-${color.presentation_id}${disabled ? ' disabled' : ''}`}
                  ></span>
                  {selectedRefinements && selectedRefinements.colors && selectedRefinements.colors.some(selectedColor => selectedColor === color.value) ? <span className="checked-mark"></span> : null}
                </div>
              </li>
            )
          })}
        </ul>
      </Card.Body>
    </Card>
  )
}

export default Colors;
