import React from 'react';
import { Card } from 'react-bootstrap';
import applyRefinement from './applyRefinement';

const Colors = ({ colors, selectedRefinements, setSelectedRefinements }) => (
  <Card className="refinement colors">
    <Card.Header>{colors.label}</Card.Header>
    <Card.Body>
      <ul className="refinement__values top-level">
        {colors.values.map(color => (
          <li key={color.value} className="color-attribute">
            <div className="swatch-wrapper"
              data-filter-value={color.value}
              onClick={(e) => applyRefinement(e, selectedRefinements, setSelectedRefinements, "colors")}
            >
              <span
                className={`value swatch-circle swatch-circle-${color.presentation_id}${color.hit_count === 0 ? ' disabled' : ''}`}
              ></span>
              {selectedRefinements.colors && selectedRefinements.colors.some(selectedColor => selectedColor === color.value) ? <span className="checked-mark"></span> : null}
            </div>
          </li>
        ))}
      </ul>
    </Card.Body>
  </Card>
)

export default Colors;
