const token = require('../../config/auth');
const config = require('../../config');
const req = require("request");

module.exports = (fastify, opts, done) => {
  fastify.get('/products/:params', (request, reply) => {
    console.log(request.params.params)
    let options =  {
      method: "GET",
      url: config.url + '/products/' + request.params.params,
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
