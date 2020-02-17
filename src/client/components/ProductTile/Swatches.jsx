import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Swatches = ({ swatches, product_id }) => (
  <Fragment>
    <div className="product-tile__color-swatches">
      {
        swatches.map(swatch => (
          <Link to={{
            pathname: `/product/details/${product_id}`,
            query: { color: swatch.color_value }
          }}>
            <img
              key={swatch.image.title}
              src={swatch.image.link}
              alt={swatch.image.alt}
              className="swatch"
              style={{ backgroundImage: `url(${swatch.image.link})` }}
            />
          </Link>
        ))
      }
    </div>
  </Fragment>
)

export default Swatches;
