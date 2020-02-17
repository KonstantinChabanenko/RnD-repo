import React from 'react';
import currencies from '../../static/currencies';
import RangePrice from './RangePrice';
import DiscountPrice from './DiscountPrice';

const Prices = ({ priceMax, priceMin, currency, listPrice, product_type }) => {
  const currencySymbol = currencies[currency];

  switch (product_type) {
    case "master":
      return (
        <div className="product-details__price text-center">
          {priceMax ?
            <RangePrice
                currencySymbol={currencySymbol}
                priceMin={priceMin}
                priceMax={priceMax} 
            /> :
            <DiscountPrice
                currencySymbol={currencySymbol}
                priceMin={priceMin}
                listPrice={listPrice}
            />
        }
        </div>
      )
    case "bundle":
      return (
        <div className="product-details__price text-center">{currencySymbol}{priceMin}</div>
      )
    case "set":
      return (
        <div className="product-details__price text-center">Starting from {currencySymbol}{priceMin}</div>
      )
    default:
      return (
        <div className="product-details__price text-center">
          {priceMax ?
            <RangePrice
                currencySymbol={currencySymbol}
                priceMin={priceMin}
                priceMax={priceMax} 
            /> :
            <DiscountPrice
                currencySymbol={currencySymbol}
                priceMin={priceMin}
                listPrice={listPrice}
            />
        }
        </div>
      )
  }
}

export default Prices;
