const http = require('../../services/http');
const token = require('../../config/auth');
const config = require('../../config');
const req = require("request");

module.exports = (fastify, opts, done) => {
  fastify.post('/customers/auth', (request, reply) => {
      let options =  {
        method: "POST",
        url: config.url + '/customers/auth',
        json: true,
        headers: {
          "Content-Type": "application/json",
          "x-dw-client-id": config.client_id
        },
        body: request.body
      };

  req(options, function(error, response) {
    if (error) throw new Error(error);
    token.set(response.headers.authorization.split(' ')[1])
    reply.code(200).send(response.headers);
    return response;
  })
  })
  done()
}
