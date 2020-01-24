import React, { useMemo } from 'react';

const Prices = ({ product }) => {
  const { priceMin, priceMax, variationProducts, currencySymbol } = product;
  const memoizedListPrice = useMemo(() => {
    const prices = variationProducts.map(variant => variant.prices ? variant.prices : {});
    const listPrices = prices.map(pricesObj => {
      const prices = Object.values(pricesObj);
      return prices.length > 0 ? Math.max(...prices) : null;
    });
    return listPrices.length > 0 ? Math.min(...listPrices) : null;
  }, [variationProducts]);

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
            <span className="list-price">{memoizedListPrice}</span>
            <span className="sale-price">&nbsp;{priceMin}</span>
          </div>
        )
      }
    </div>
  )
}

export default Prices;
