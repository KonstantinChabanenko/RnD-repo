const config = require('../../config');
const req = require("request");

module.exports = (fastify, opts, done) => {
  fastify.get('/product_search', (request, reply) => {
    if (Object.entries(request.query).length !== 0) {
      let queryString = '';
    for (let [key, value] of Object.entries(request.query)) {
     queryString += key + '=' + value + '&';
    }
    queryString = queryString.slice(0, queryString.length-1);
    console.log(`query string ${queryString}`);
    }
    
    let options =  {
      method: "GET",
      url: config.url + '/product_search' ,
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
