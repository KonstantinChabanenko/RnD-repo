import React from 'react';
import applyAttribute from '../../../pages/ProductDetailsPage/applyAttribute';

const Swatches = ({ colors, swatches, selectedColor, setSelectedColor, setProduct }) => {
    const clickHandler = (e) => {
        const colorValue = e.currentTarget.dataset.colorValue;
        const isDisabled = e.currentTarget.dataset.disabled;
        if (colorValue !== selectedColor && !isDisabled) {
            setSelectedColor(colorValue);
            setProduct(prevState => {
                const prevProduct = {...prevState};
                applyAttribute(prevProduct, 'sizes', 'c_color', 'c_size', colorValue);
                return prevProduct;
            });
        }
    }

    return (
        <div className="color-swatches-wrapper">
            <label>Select Color</label>
            <ul className="color-swatches">
                {swatches.map(swatch => (
                    <li
                        key={swatch.image.title}
                        className="color-attribute"
                    >
                        <div
                            className="swatch-wrapper"
                            data-color-value={swatch.color_value}
                            data-disabled={colors.values.some(value => value.value === swatch.color_value && !value.orderable) || null}
                            onClick={(e) => clickHandler(e)}
                        >
                            <img
                                src={swatch.image.link}
                                alt={swatch.image.alt}
                                className="swatch"
                                style={{ backgroundImage: `url(${swatch.image.link})` }}
                            />
                            {selectedColor === swatch.color_value ? <span className="checked-mark"></span> : null}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Swatches;
