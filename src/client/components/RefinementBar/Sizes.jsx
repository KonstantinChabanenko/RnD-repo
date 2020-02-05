import React from 'react';
import { Card } from 'react-bootstrap';

const Sizes = ({ sizes, selectedRefinements, setSelectedRefinements }) => {
    const applyRefinement = (e) => {
        e.stopPropagation();
        const selectedSizeValue = e.currentTarget.dataset.sizeValue;
        const selectedSize = selectedRefinements.sizes ? selectedRefinements.sizes.find(sizeValue => sizeValue === selectedSizeValue) : null;

        if (!selectedSize) {
            setSelectedRefinements(prevState => {
                const updatedColors = prevState.colors ? prevState.colors : [];
                updatedColors.push(selectedSizeValue);

                return ({
                    ...prevState,
                    sizes: updatedColors
                })
            });
        } else {
            setSelectedRefinements(prevState => {
                const updatedSizes = prevState.colors;
                const selectedSizeIndex = updatedSizes.indexOf(selectedSize);
                updatedSizes.splice(selectedSizeIndex, 1);

                return ({
                    ...prevState,
                    sizes: updatedSizes
                })
            });
        }
    }

    return (
        <Card className="refinement colors">
            <Card.Header>{sizes.label}</Card.Header>
            <Card.Body>
                <ul className="refinement__values top-level">
                    {sizes.values.map(size => (
                        <li key={size.value} className="value" data-size-value={size.value} onClick={(e) => applyRefinement(e)}>
                            {selectedRefinements.sizes && selectedRefinements.sizes.some(selectedSize => selectedSize === size.value) ? <i className="fas fa-check-square"></i> : <i className="far fa-square"></i>}
                            <span className="category-name">{size.label}</span>
                        </li>
                    ))}
                </ul>
            </Card.Body>
        </Card>
    )
}

export default Sizes;
