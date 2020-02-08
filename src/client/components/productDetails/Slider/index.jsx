import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

const Slider = ({ defaultImages, variants }) => {
    const location = useLocation();
    const color = location.query ? location.query['color'] : null;
    const images = useMemo(() => {
        if (color) {
            const selectedVariant = variants.find(variant => variant.c_color === color);
            return selectedVariant.image_groups[0].images;
        }

        return defaultImages;
    }, [color, defaultImages, variants]);

    return (
        <Carousel>
            {images.map((image) => (
                <Carousel.Item key={image.link}><img src={image.link} alt={image.alt} /></Carousel.Item>
            ))}
        </Carousel>
    )
}

export default Slider;
