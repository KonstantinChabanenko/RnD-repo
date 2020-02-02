import React, { Fragment } from 'react';
import currencies from '../../static/currencies';

const Prices = ({ priceMax, priceMin, currency, listPrice, product_type }) => {
  const currencySymbol = currencies[currency];
  const RangePrice = () => (
    <Fragment>
      <span className="sale-price">{currencySymbol}{priceMin}</span>
      <span>-</span>
      <span className="sale-price">{currencySymbol}{priceMax}</span>
    </Fragment>
  )
  const DiscountPrice = () => (
    <Fragment>
      <span className="list-price">{currencySymbol}{listPrice}</span>
      <span className="sale-price">{currencySymbol}{priceMin}</span>
    </Fragment>
  )

  switch (product_type) {
    case "master":
      return (
        <div className="product-tile__price">
          {priceMax ? <RangePrice /> : <DiscountPrice />}
        </div>
      )
    case "bundle":
      return (
        <div className="product-tile__price">{currencySymbol}{priceMin}</div>
      )
    case "set":
      return (
        <div className="product-tile__price">Starting from {currencySymbol}{priceMin}</div>
      )
    default:
      return null;
  }
}

export default Prices;
