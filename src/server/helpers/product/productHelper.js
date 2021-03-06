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

export const getProductDetails = async product => {
  let tempProduct = {
    id: product.id,
    images: product.image_groups[0].images,
    product_type: Object.keys(product.type)[1],
    priceMin: product.price,
    currency: product.currency,
    long_description: product.long_description,
    short_description: product.short_description,
    product_promotions: product.product_promotions,
    sizes: product.variation_attributes.find(attribute => attribute.id === 'size'),
    colors: product.variation_attributes.find(attribute => attribute.id === 'color'),
  };

  if (product.type.master) {
    const variants = await getProductVariations(
      product.variants,
      "expand=prices,images,availability"
    );
    tempProduct.variants = variants.data;
    tempProduct.priceMax = product.price_max;
    tempProduct.title = product.page_title;
  } else {
    tempProduct.title = product.name;
  }
  return tempProduct;
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
    let tempProduct = {
      id: product.id,
      imageSrc: product.image_groups[1].images[0].link,
      imageAlt: product.image_groups[1].images[0].alt,
      product_type: Object.keys(product.type)[1],
      priceMin: product.price,
      currency: product.currency
    };

    if (product.type.master) {
      let variants = [];
      if (product.variants.length > 24) {
        let requestAmount =
          product.variants.length % 24 === 0
            ? product.variants.length / 24
            : Math.floor(product.variants.length / 24) + 1;
        let tempVariants = {};
        for (let i = 0; i < requestAmount; i++) {
          tempVariants = await getProductVariations(
            product.variants.slice(
              i * 24,
              i * 24 > product.variants.length
                ? product.variants.length - 1
                : (i + 1) * 24
            ),
            "expand=prices,images"
          );
          variants = variants.concat(tempVariants.data);
          tempProduct.variants = variants;
        }
      } else {
        variants = await getProductVariations(
          product.variants,
          "expand=prices,images"
        );
        tempProduct.variants = variants.data;
      }
      tempProduct.priceMax = product.price_max;
      tempProduct.title = product.page_title;
    } else {
      tempProduct.title = product.name;
    }

    return tempProduct;
  });

  return Promise.all(temp);
};

export const getDetailedProducts = (detailedProducts) => {
  return detailedProducts.map(product => {
    let tempProduct = {
      id: product.id,
      imageSrc: product.imageSrc,
      imageAlt: product.imageAlt,
      product_type: product.product_type,
      priceMin: product.priceMin,
      currency: product.currency,
      priceMax: product.priceMax,
      title: product.title
    };
    if (product.product_type === "master") {
      tempProduct.listPrice = getProductListPrice(product.variants);
      tempProduct.swatches = getProductSwatches(product.variants);
    }
    return tempProduct;
  });
}

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
  let swatches = [];

  for (let variant of variants) {
    if (uniqueColors.indexOf(variant.c_color) === -1) {
      uniqueColors.push(variant.c_color);
      swatches.push({
        image: variant.image_groups[3] ? variant.image_groups[3].images[0] : null,
        color_value: variant.c_color,
        inventory: variant.inventory,
      });
    }
  }

  return swatches;
};
