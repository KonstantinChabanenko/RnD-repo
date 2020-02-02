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
              key={swatch.title}
              src={swatch.link}
              alt={swatch.alt}
              className="swatch"
              style={{ backgroundImage: `url(${swatch.link})` }}
              onClick={() => history.push({
                pathname: `/product-details/${product_id}`,
                query: { color: 'red' } // will be changed
              })}
            />
          ))
        }
      </div>
    </Fragment>
  )
}

export default Swatches;
