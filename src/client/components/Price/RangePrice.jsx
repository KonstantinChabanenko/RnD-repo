import React, { Fragment } from 'react';

const RangePrice = ({ currencySymbol, priceMin, priceMax }) => (
    <Fragment>
        <span className="sale-price">{currencySymbol}{priceMin}</span>
        <span>-</span>
        <span className="sale-price">{currencySymbol}{priceMax}</span>
    </Fragment>
)

export default RangePrice;
