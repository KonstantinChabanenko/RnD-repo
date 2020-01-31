const config = require("../../config");
const axios = require("axios");
const token = require("../../config/auth");
const {
  getReadyProducts,
  getProductListPrice,
  getProductSwatches
} = require("../../helpers/product/productTileHelper");

module.exports = (fastify, opts, done) => {
  fastify.get("/producttile/:category", async (request, reply) => {
    const options = (url, queryString, method, body) => {
      return {
        method: method,
        url: config.url + url + (queryString ? "?" + queryString : ""),
        json: true,
        headers: {
          "Content-Type": "application/json",
          "x-dw-client-id": config.client_id,
          Authorization: "Bearer " + token.get()
        }
      };
    };
    const productSearch_result = await axios(
      options(
        "/product_search",
        "count=24&refine=cgid=" + request.params.category
      )
    );
    const productSearchHits = productSearch_result.data.hits;
    const masterProductIds = productSearchHits
      .map(hit => hit.product_id)
      .toString();
    await axios.post("http://127.0.0.1:8000/customers/auth", { type: "guest" });
    const products_result = await axios(
      options(
        `/products/(${masterProductIds})`,
        "expand=variations,images,prices",
        "GET"
      )
    );
    const products = products_result.data.data;

    const detailedProducts = await getReadyProducts(products);

    const readyProducts = detailedProducts.map(product => {
      let tempProduct = {...product};
      tempProduct.listPrices = getProductListPrice(tempProduct.variants);
      tempProduct.images = getProductSwatches(tempProduct.variants);
      return tempProduct;
    });

    reply.code(200).send(readyProducts);
  });
  done();
};
