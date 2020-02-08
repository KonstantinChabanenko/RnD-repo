import React from 'react';
import { Link } from 'react-router-dom';
import Prices from './Prices';
import Swatches from './Swatches';

const ProductTile = ({ product }) => {
  const { imageAlt, imageSrc, title, priceMax, priceMin, currency, listPrice, product_type, swatches, id } = product;

  return (
    <div className="product-tile">
      <div className="image-container">
        <Link to={`/product/details/${id}`}>
          <img className="product-tile__image" src={imageSrc} alt={imageAlt} />
        </Link>
      </div>
      <div className="product-tile__body">
        {swatches ? <Swatches swatches={swatches} product_id={id} /> : null}
        <Link to={`/product/details/${id}`} className="product-tile__pdp-link">{title}</Link>
        <Prices
          priceMax={priceMax}
          priceMin={priceMin}
          currency={currency}
          listPrice={listPrice}
          product_type={product_type}
        />
      </div>
    </div>
  )
}

export default ProductTile;
