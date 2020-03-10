import React, { Fragment } from 'react';

const Price = ({ price }) => (
  <div className="product-details__price text-center">
    {
      price && price.type === "range" ? (
        <Fragment>
          <span className="sale-price">{price.min.sales.formatted}</span>
          <span> - </span>
          <span className="sale-price">{price.max.sales.formatted}</span>
        </Fragment>
      ) : (
        <Fragment>
          {price.list ? <span className="list-price">{price.list.formatted}</span> : null}
          <span className="sale-price">{price.sales.formatted}</span>
        </Fragment>
      )
    }
  </div>
)

export default Price;
