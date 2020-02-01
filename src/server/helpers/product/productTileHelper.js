const config = require("../../config");
const axios = require("axios");
const token = require("../../config/auth");

const options = (url, queryString) => {
  return {
    method: "GET",
    url: config.url + url + (queryString ? "?" + queryString : ""),
    json: true,
    headers: {
      "Content-Type": "application/json",
      "x-dw-client-id": config.client_id,
      Authorization: "Bearer " + token.get()
    }
  };
};

export const getProductVariations = async (variationsIds, params) => {
  const variants = await axios(
    options(
      `/products/(${variationsIds
        .map(variant => variant.product_id)
        .join(",")})`,
      params
    )
  );
  return variants.data;
};

export const getReadyProducts = async products => {
  const temp = products.map(async product => {
    console.log(product);
    let tempProduct = {
      id: product.id,
      imageSrc: product.image_groups[1].images[0].link,
      imageAlt: product.image_groups[1].images[0].alt,
      product_type: Object.keys(product.type)[1],
      priceMin: product.price,
      currency: product.currency
    };

    if (product.type.master) {
      const variants = await getProductVariations(
        product.variants,
        "expand=prices,images"
      );
      tempProduct.variants = variants.data;
      tempProduct.priceMax = product.price_max;
      tempProduct.title = product.page_title;
    } else {
      tempProduct.title = product.name;
    }

    return tempProduct;
  });

  return Promise.all(temp);
};

export const getProductListPrice = variants => {
  const variantsPrices = variants.map(variant =>
    variant.prices ? variant.prices : {}
  );
  const listPrices = variantsPrices.map(pricesObj => {
    const prices = Object.values(pricesObj);
    return prices.length > 0 ? Math.max(...prices) : null;
  });

  return listPrices.length > 0
    ? Math.min(...listPrices).toString() + ".00"
    : null;
};

export const getProductSwatches = variants => {
  let uniqueColors = [];
  let images = [];

  for (let variant of variants) {
    if (uniqueColors.indexOf(variant.c_color) === -1) {
      uniqueColors.push(variant.c_color);
      images.push(variant.image_groups[3].images[0]);
    }
  }

  return images;
};
