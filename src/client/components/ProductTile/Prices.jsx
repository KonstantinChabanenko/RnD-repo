import React, { useMemo } from 'react';
import { getProductListPrice } from "../../helpers/product/productTileHelper";

const Prices = ({ product }) => {
  const { priceMin, priceMax, variants, currencySymbol } = product;
  const memoizedListPrice = useMemo(() => getProductListPrice(variants), [variants]);

  return (
    <div className="product-tile__price">
      {priceMax ?
        (
          <div>
            <span className="sale-price">{currencySymbol}{priceMin}</span>
            <span>-</span>
            <span className="sale-price">{currencySymbol}{priceMax}</span>
          </div>
        ) :
        (
          <div>
            <span className="list-price">{currencySymbol}{memoizedListPrice}</span>
            <span className="sale-price">{currencySymbol}{priceMin}</span>
          </div>
        )
      }
    </div>
  )
}

export default Prices;
