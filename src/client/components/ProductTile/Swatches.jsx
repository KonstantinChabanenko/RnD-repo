import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

const Swatches = ({ swatches, product_id }) => {
  const history = useHistory();
  return (
    <Fragment>
      <div className="product-tile__color-swatches">
        {
          swatches.map(swatch => (
            <img
              key={swatch.image.title}
              src={swatch.image.link}
              alt={swatch.image.alt}
              className="swatch"
              style={{ backgroundImage: `url(${swatch.image.link})` }}
              onClick={() => history.push({
                pathname: `/product-details/${product_id}`,
                query: { color: swatch.color_value }
              })}
            />
          ))
        }
      </div>
    </Fragment>
  )
}

export default Swatches;
