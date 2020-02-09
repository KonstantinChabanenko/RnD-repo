import React from 'react';

const Swatches = ({ colors, swatches, selectedColor, setSelectedColor }) => {
    const clickHandler = (e) => {
        const colorValue = e.currentTarget.dataset.colorValue;
        setSelectedColor(colorValue);
    }

    return (
        <div className="color-swatches-wrapper">
            <label>Select Color</label>
            <ul className="color-swatches">
                {swatches.map(swatch => {
                    if (colors.values.some(value => value.value === swatch.color_value && value.orderable)) {
                        return (
                            <li key={swatch.image.title} className="color-attribute">
                                <div
                                    className="swatch-wrapper"
                                    data-color-value={swatch.color_value}
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
                        )
                    } else {
                        return null;
                    }
                })}
            </ul>
        </div>
    )
}

export default Swatches;
