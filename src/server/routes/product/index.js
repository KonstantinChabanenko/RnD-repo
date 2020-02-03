const config = require("../../config");
const req = require("request");
const axios = require("axios");
const token = require("../../config/auth");
const {
  getProductDetails,
  getProductListPrice,
  getProductSwatches
} = require("../../helpers/product/productHelper");

module.exports = (fastify, opts, done) => {
  fastify.get("/products/:params", (request, reply) => {
    let queryString = "";
    if (Object.entries(request.query).length !== 0) {
      for (let [key, value] of Object.entries(request.query)) {
        queryString += key + "=" + value + "&";
      }
      queryString = queryString.slice(0, queryString.length - 1);
      console.log("QUERYSTRING: " + queryString);
    }
    console.log("PARAMS: " + request.params.params);
    let options = {
      method: "GET",
      url:
        config.url +
        "/products/" +
        request.params.params +
        (queryString ? "?" + queryString : ""),
      json: true,
      headers: {
        "Content-Type": "application/json",
        "x-dw-client-id": config.client_id
      }
    };

    req(options, function(error, response) {
      if (error) throw new Error(error);
      reply.code(response.statusCode).send(response.body);
      return response;
    });
  });
  done();
};

module.exports = (fastify, opts, done) => {
  fastify.get("/product/details/:product_id", async (request, reply) => {
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

    await axios.post("http://127.0.0.1:8000/customers/auth", { type: "guest" });
    const product_result = await axios(
      options(
        `/products/${request.params.product_id}`,
        "expand=variations,images,prices,promotions",
        "GET"
      )
    );

    const product = product_result.data;

    const detailedProduct = await getProductDetails(product);
    const promotions = await axios(
      options(
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
  done();
};
