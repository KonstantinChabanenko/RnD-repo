const config = require('../../config');
const req = require("request");
const axios = require('axios');

module.exports = (fastify, opts, done) => {
  fastify.get('/producttile/:category', async (request, reply) => {
    const options = (url, queryString) =>  {
      return {
      method: "GET",
      url: config.url + url + (queryString ? '?' + queryString : ""),
      json: true,
      headers: {
        "Content-Type": "application/json",
        "x-dw-client-id": config.client_id
      }
    }
    };
    let result = await axios(options('/product_search', 'expand=images&refine=cgid=' + request.params.category));
    let productSearchHits = result.data.hits;


    reply.code(200).send(productSearchHits);
  });
  done()
}
