const {apiGetOptions, queryStringBuilder} = require('../../helpers/api/apiHelper');
const req = require("request");

module.exports = (fastify, opts, done) => {
  fastify.get('/search', (request, reply) => {
    let queryString = queryStringBuilder(request.query);

    req(apiGetOptions('/product_search', queryString), function(error, response) {
      if (error) throw new Error(error);
      reply.code(response.statusCode).send(response.body);
      return response;
    })
  });
  done()
}
