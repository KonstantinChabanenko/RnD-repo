import React from 'react';
import { Link } from 'react-router-dom';
import ProductImage from "../../images/PG.10219989.JJBF5XX.PZ.jpg";
import { auth_token } from '../../services/http';

const ProductTile = () => {
  console.log(auth_token);

  return (
    <div className="product-tile">
      <div className="product-tile__image-container">
        <Link>
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
