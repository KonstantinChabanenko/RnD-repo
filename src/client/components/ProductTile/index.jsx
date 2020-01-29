import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Prices from "./Prices";
import Swatches from './Swatches';
import { getProductDetails } from '../../helpers/product/productTileHelper';
import StyledProductTile from './StyledProductTile';

const ProductTile = () => {
  const [product, setProduct] = useState();
  const { title, imageSrc, imageAlt, variants } = product || {};
  const productId = "25518058M";
  const params = { expand: "variations,images,prices" };

  useEffect(() => {
    getProductDetails(productId, params).then(res => setProduct(res));
  }, [productId]);

  return product ?
    (
      <StyledProductTile className="product-tile-wrapper">
        <div className="product-tile">
          <div className="image-container">
            <Link to="/product-tile">
              <img src={imageSrc} alt={imageAlt} />
            </Link>
          </div>
          <div className="product-tile__body">
            <Swatches variants={variants} />
            <Link to="/product-tile" className="product-tile__pdp-link">{title}</Link>
            <Prices product={product} />
          </div>
          </div>
      </StyledProductTile>
    ) :
    (
      <div></div>
    )
}

export default ProductTile;
