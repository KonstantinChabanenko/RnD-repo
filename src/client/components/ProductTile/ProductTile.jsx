import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProduct } from '../../services/http';
import Prices from "./Prices";
import Swatches from './Swatches';
import currencies from '../../static/currencies';

const ProductTile = () => {
  const [product, setProduct] = useState();
  const { title, imageSrc, imageAlt, variationProducts, variationAttributes } = product || {};
  
  useEffect(() => {
    getProduct("25518058M", { expand: "variations,images,prices" }).then(res => {
      console.log(res);
      const productProps = {
        title: res.page_title,
        imageSrc: res.image_groups[1].images[0].link,
        imageAlt: res.image_groups[1].images[0].alt,
        priceMax: res.price_max,
        priceMin: res.price,
        currencySymbol: currencies[res.currency],
        variationAttributes: res.variation_attributes,
      }
      getProduct(`(${res.variants.map(variant => variant.product_id).join(",")})`, { expand: "prices,images" })
      .then(res => 
        setProduct({
          ...productProps,
          variationProducts: res.data,
        }))}
      )
}, []);

  return product ?
    (
      <div className="product-tile">
      <div className="image-container">
        <Link to="/product-tile">
          <img src={imageSrc} alt={imageAlt}/>
        </Link>
      </div>
      <div className="product-tile__body">
        <Swatches variationProducts={variationProducts} variationAttributes={variationAttributes} />
        <div className="product-tile__pdp-link">
    <Link to="/product-tile">{title}</Link>
        </div>
        <Prices product={product} />
      </div>
    </div>
    ) : 
    (
      <div></div>
    )
  }

export default ProductTile;
