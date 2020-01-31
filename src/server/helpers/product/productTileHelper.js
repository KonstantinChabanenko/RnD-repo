const config = require('../../config');
const axios = require('axios');
const token = require('../../config/auth');

const options = (url, queryString) =>  {
      return {
      method: 'GET',
      url: config.url + url + (queryString ? '?' + queryString : ""),
      json: true,
      headers: {
        "Content-Type": "application/json",
        "x-dw-client-id": config.client_id,
        "Authorization": "Bearer " + token.get()
      },
    };
}
export const getProductDetails = async (productId, params) => {
  const productData = await axios(options(`/products/${productId}`, params));
  const product = productData.data;
  const variants = await axios(options(`/products/(${product.variants.map(variant =>variant.product_id).join(",")})`), 'expand=prices,images');
  const productDetails = {
      title: product.page_title,
      imageSrc: product.image_groups[1].images[0].link,
      imageAlt: product.image_groups[1].images[0].alt,
      priceMax: product.price_max,
      priceMin: product.price,
      currencySymbol: currencies[product.currency],
      variationAttributes: product.variation_attributes,
      variants: variants.data,
  }
  return productDetails;
}

export const getProductVariations = async (variationsIds, params) => {
const variants = await axios(options(`/products/(${variationsIds.map(variant => variant.product_id).join(",")})`, params));
return variants.data;
}

export const getReadyProducts = async (products) => {
  const temp = products.map(async (product) => {
    const variants = await getProductVariations(product.variants, 'expand=prices,images')
      let tempProduct = {
        title: product.page_title,
        imageSrc: product.image_groups[1].images[0].link,
        imageAlt: product.image_groups[1].images[0].alt,
        priceMax: product.price_max,
        priceMin: product.price,
        currency: product.currency,
        variants: variants.data
      };
      return tempProduct;
})

return Promise.all(temp);
}

export const getProductListPrice = (variants) => {
  const variantsPrices = variants.map(variant => variant.prices ? variant.prices : {});
  const listPrices = variantsPrices.map(pricesObj => {
    const prices = Object.values(pricesObj);
    return prices.length > 0 ? Math.max(...prices) : null;
  });

  return listPrices.length > 0 ? Math.min(...listPrices).toString() + '.00' : null;
}

export const getProductSwatches = (variants) => {
  let uniqueColors = [];
  let images = [];

  for (let variant of variants) {
    if (uniqueColors.indexOf(variant.c_color) === -1) {
      uniqueColors.push(variant.c_color);
      images.push(variant.image_groups[3].images[0]);
    }
  }

  return images;
}