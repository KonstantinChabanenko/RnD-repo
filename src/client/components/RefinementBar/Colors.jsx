import React from 'react';
import { Card } from 'react-bootstrap';

const Colors = ({ colors, selectedRefinements, setSelectedRefinements }) => {
    const applyRefinement = (e) => {
        e.stopPropagation();
        const selectedColor = e.currentTarget.dataset.colorAttribute;
        const isSelected = selectedRefinements.colors ? selectedRefinements.colors.some(color => color === selectedColor) : false;
        if (!isSelected) {
            setSelectedRefinements(prevState => {
                const updatedColors = prevState.colors ? prevState.colors : [];
                updatedColors.push(selectedColor);

                return ({
                    ...prevState,
                    colors: updatedColors
                })
            });
        }
    }

    return (
        <Card className="refinement colors">
            <Card.Header>{colors.label}</Card.Header>
            <Card.Body>
                <ul className="refinement__values top-level">
                    {colors.values.map(color => (
                        <li key={color.value} className="color-attribute">
                            <span
                                className={`value swatch-circle swatch-circle-${color.presentation_id}${color.hit_count === 0 ? ' disabled' : ''}`}
                                data-color-attribute={color.value}
                                onClick={(e) => applyRefinement(e)}
                            ></span>
                        </li>
                    ))}
                </ul>
            </Card.Body>
        </Card>
    )
}

export default Colors;
