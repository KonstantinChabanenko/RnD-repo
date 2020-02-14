import React from 'react';
import { useSelector } from 'react-redux';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
  const product = useSelector(state => state.productReducer.currentProduct);
  const images = product.selectedColor ? product.variants.find(variant => variant.c_color === product.selectedColor).image_groups[0].images : product.images;

  return (
    <Carousel interval={null}>
      {images.map((image) => (
        <Carousel.Item key={image.link}>
          <img
            src={image.link}
            alt={image.alt}
            className="product-details__image"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Slider;
