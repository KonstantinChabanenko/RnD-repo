import React from 'react';
import { Card } from 'react-bootstrap';

const Colors = ({ colors, selectedRefinements, setSelectedRefinements }) => {
    const applyRefinement = (e) => {
        e.stopPropagation();
        const selectedColorValue = e.currentTarget.dataset.colorAttribute;
        const selectedColor = selectedRefinements.colors ? selectedRefinements.colors.find(colorValue => colorValue === selectedColorValue) : null;
        if (!selectedColor) {
            setSelectedRefinements(prevState => {
                const updatedColors = prevState.colors ? prevState.colors : [];
                updatedColors.push(selectedColorValue);

                return ({
                    ...prevState,
                    colors: updatedColors
                })
            });
        } else {
            setSelectedRefinements(prevState => {
                const updatedColors = prevState.colors;
                const selectedColorIndex = updatedColors.indexOf(selectedColor);
                updatedColors.splice(selectedColorIndex, 1);

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
                            <div className="swatch-wrapper"
                                data-color-attribute={color.value}
                                onClick={(e) => applyRefinement(e)}
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
}

export default Colors;
