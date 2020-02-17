const config = require("../../config");
const req = require("request");
const axios = require("axios");
const token = require("../../config/auth");
const {apiGetOptions, queryStringBuilder} = require('../../helpers/api/apiHelper');
const {
  getProductDetails,
  getProductListPrice,
  getProductSwatches
} = require("../../helpers/product/productHelper");

module.exports = (fastify, opts, done) => {
  
/////////////////////////////////////////////////////////////////
// #ROUTE: GET:/product/details/:product_id /////////////////////
////////////////////////////////////////////////////////////////
  fastify.get("/product/details/:product_id", async (request, reply) => {

    await axios.post("http://127.0.0.1:8000/customers/auth", { type: "guest" });
    const product_result = await axios(
      apiGetOptions(
        `/products/${request.params.product_id}`,
        "expand=variations,images,prices,promotions"
      )
    );

    const product = product_result.data;

    const detailedProduct = await getProductDetails(product);
    const promotions = await axios(
      apiGetOptions(
        `/promotions/(${detailedProduct.product_promotions
          .map(promotion => promotion.promotion_id)
          .toString()})`
      )
    );
    detailedProduct.product_promotions = promotions.data.data;

    switch (detailedProduct.product_type) {
      case "master":
        detailedProduct.listPrice = getProductListPrice(
          detailedProduct.variants
        );
        detailedProduct.swatches = getProductSwatches(detailedProduct.variants);
        break;
    }
    reply.code(200).send(detailedProduct);
  });


////////////////////////////////////////////////////////////////
// #ROUTE: GET:/products/:params ///////////////////////////////
////////////////////////////////////////////////////////////////
  fastify.get("/products/:params", (request, reply) => {
    let queryString = queryStringBuilder(request.query);
    req(apiGetOptions('/products/' + request.params.params, queryString), function(error, response) {
      if (error) throw new Error(error);
      reply.code(response.statusCode).send(response.body);
      return response;
    });
  });

  done();
};
