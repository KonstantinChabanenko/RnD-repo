import React, { Fragment } from 'react';

const DiscountPrice = ({ currencySymbol, listPrice, priceMin }) => (
    <Fragment>
      <span className="list-price">{currencySymbol}{listPrice}</span>
      <span className="sale-price">{currencySymbol}{priceMin}</span>
    </Fragment>
  )

export default DiscountPrice;