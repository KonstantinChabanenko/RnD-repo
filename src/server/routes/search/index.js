const {apiGetOptions, queryStringBuilder} = require('../../helpers/api/apiHelper');
const req = require("request");

module.exports = (fastify, opts, done) => {
  fastify.get('/search', (request, reply) => {
    let queryString = queryStringBuilder(request.query);

    req(apiGetOptions('/product_search', queryString, request.headers.authorization), function(error, response) {
      if (error) {reply.code(response.statusCode).send(error.response.body);}
      reply.code(response.statusCode).send(response.body);
      return response;
    })
  });
  done()
}
