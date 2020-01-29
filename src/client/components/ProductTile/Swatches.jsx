import React, { Fragment, useMemo } from 'react';
import { getProductSwatches } from '../../helpers/product/productTileHelper';

const Swatches = ({ variants }) => {
  const memoizedSwatches = useMemo(() => getProductSwatches(variants), [variants]);

  return (
    <Fragment>
      <div className="product-tile__color-swatches">
        {
          memoizedSwatches.map(image => <img
            key={image.title}
            src={image.link}
            alt={image.alt}
            className="swatch"
            style={{ backgroundImage: `url(${image.link})` }}
          />)
        }
      </div>
    </Fragment>
  )
}

export default Swatches;
