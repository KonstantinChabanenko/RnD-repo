import React, { Fragment } from 'react';

const Swatches = ({ variationProducts, variationAttributes }) => {
  const getUniqueColors = (array) => {
    let uniqueColors = [];
    let images = [];

    for (let variant of array) {
      if (uniqueColors.indexOf(variant.c_color) === -1) {
        uniqueColors.push(variant.c_color);
        images.push(variant.image_groups[3].images[0]);
      }
    }

    return images;
  }

  return (
    <Fragment>
      <div className="product-tile__color-swatches">
        {
          getUniqueColors(variationProducts).map(image => <img src={image.link} alt={image.alt} />)
        }
      </div>
    </Fragment>
  )
}

export default Swatches;
