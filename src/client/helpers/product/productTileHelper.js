import { getProduct } from "../../services/http";
import currencies from '../../static/currencies';

export const getProductDetails = async (productId, params) => {
    const product = await getProduct(productId, params);
    const variants = await getProduct(`(${product.variants.map(variant =>variant.product_id).join(",")})`, { expand: "prices,images" });
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
