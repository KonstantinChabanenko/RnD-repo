import React from 'react';
// import { useSelector } from 'react-redux';
import { Carousel } from 'react-bootstrap';

const Slider = ({ images }) => (
  <Carousel interval={null}>
    {images.map((image) => (
      <Carousel.Item key={image.index}>
        <img
          src={image.absURL}
          alt={image.alt}
          className="product-details__image"
        />
      </Carousel.Item>
    ))}
  </Carousel>
)

export default Slider;
