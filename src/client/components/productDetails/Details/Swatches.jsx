import React from 'react';

const Swatches = ({ swatches, setSelectedColor }) => {
    const clickHandler = (e) => {
        const colorValue = e.currentTarget.dataset.colorValue;
        setSelectedColor(colorValue);
    }

    return (
        <ul className="color-swatches">
            {swatches.map(swatch => (
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
            ))}
        </ul>
    )
}

export default Swatches;
