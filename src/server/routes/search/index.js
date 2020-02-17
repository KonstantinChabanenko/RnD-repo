const config = require('../../config');
const req = require("request");

module.exports = (fastify, opts, done) => {
  fastify.get('/search', (request, reply) => {
    let queryString = '';
    if (Object.entries(request.query).length !== 0) {
    for (let [key, value] of Object.entries(request.query)) {
     queryString += key + '=' + value + '&';
    }
    queryString = queryString.slice(0, queryString.length-1);
    }
    let options =  {
      method: "GET",
      url: config.url + '/product_search' + (queryString ? '?' + queryString : ""),
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
    })
  });
  done()
}
