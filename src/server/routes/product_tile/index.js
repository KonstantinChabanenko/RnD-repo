const config = require("../../config");
const {apiGetOptions, queryStringBuilder} = require("../../helpers/api/apiHelper");
const axios = require("axios");
const token = require("../../config/auth");
const {
  getReadyProducts,
  getDetailedProducts
} = require("../../helpers/product/productHelper");

module.exports = (fastify, opts, done) => {
  fastify.get("/producttiles", async (request, reply) => {
    let queryString = queryStringBuilder(request.query);

    const productSearch_result = await axios(
      apiGetOptions(
        "/product_search",
        "count=24&" + `${queryString}`,
        request.headers.authorization
      )
    );

    const productSearchHits = productSearch_result.data.hits;
    const refinements = productSearch_result.data.refinements;
    const sortingOptions = productSearch_result.data.sorting_options;

    const masterProductIds = productSearchHits
      .map(hit => hit.product_id)
      .toString();

    const products_result = await axios(
      apiGetOptions(
        `/products/(${masterProductIds})`,
        "expand=variations,images,prices",
        request.headers.authorization
      )
    );

    const products = products_result.data.data;
    const readyProducts = await getReadyProducts(products);
    const detailedProducts = getDetailedProducts(readyProducts)

    reply.code(200).send({ products: detailedProducts, refinements, sortingOptions });
  });
  done();
};
