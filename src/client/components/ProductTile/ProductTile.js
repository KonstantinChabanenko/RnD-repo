import React from 'react';
import { Link } from 'react-router-dom';
import ProductImage from "../../images/PG.10219989.JJBF5XX.PZ.jpg";
import { getProduct } from '../../services/http';

const ProductTile = () => {
  const params = {
    expand: "variations, images",
  }
  const product = getProduct("25697194M", params);
  console.log(product.then(res => res.id));

  return (
    <div className="product-tile">
      <div className="image-container">
        <Link to="/product-tile">
          <img src={ProductImage} alt="product"/>
        </Link>
      </div>
      <div className="product-tile__body">
        <div className="product-tile__color-swatches"></div>
        <div className="product-tile__pdp-link"></div>
        <div className="product-tile__price"></div>
      </div>
    </div>
  )
}

export default ProductTile;
