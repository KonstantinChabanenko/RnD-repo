import React from 'react';
import { Card } from 'react-bootstrap';
import applyRefinement from './applyRefinement';

const Sizes = ({ sizes, selectedRefinements, setSelectedRefinements }) => (
    <Card className="refinement sizes">
        <Card.Header>{sizes.label}</Card.Header>
        <Card.Body>
            <ul className="refinement__values top-level">
                {sizes.values.map(size => (
                    <li
                        key={size.value}
                        className="value"
                        data-filter-value={size.value}
                        onClick={(e) => applyRefinement(e, selectedRefinements, setSelectedRefinements, "sizes")}>
                        {selectedRefinements.sizes && selectedRefinements.sizes.some(selectedSize => selectedSize === size.value) ? <i className="fas fa-check-square"></i> : <i className="far fa-square"></i>}
                        <span className="category-name">{size.label}</span>
                    </li>
                ))}
            </ul>
        </Card.Body>
    </Card>
)

export default Sizes;
