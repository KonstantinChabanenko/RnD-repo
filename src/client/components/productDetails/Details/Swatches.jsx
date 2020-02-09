import React from 'react';

const Swatches = ({ colors, swatches, setSelectedColor }) => {
    const clickHandler = (e) => {
        const colorValue = e.currentTarget.dataset.colorValue;
        setSelectedColor(colorValue);
    }

    return (
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
                                    style={{ backgroundImage: `url(${swatch.image.link})` }}
                                />
                            </div>
                        </li>
                    )
                } else {
                    return null;
                }
            })}
        </ul>
    )
}

export default Swatches;
