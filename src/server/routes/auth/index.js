const token = require("../../config/auth");
const { apiPostOptions, apiPostMethod } = require("../../helpers/api/apiHelper");
const req = require("request");

module.exports = (fastify, opts, done) => {
  fastify.post("/customers/auth", (request, reply) => {
    req(apiPostOptions("/customers/auth", null, request.body), function(
      error,
      response
    ) {
      if (error) throw new Error(error);
      token.set(response.headers.authorization.split(" ")[1]);
      reply.code(200).send(response.headers);
      return response;
    });
  });

  fastify.post("/sessions", (request, reply) => {
    apiPostMethod(
      `/sessions`,
      "",
      '',
      request.headers.authorization
    )
      .then(response => reply.code(200).send(response.headers['set-cookie']))
      .catch(err => reply.code(500).send(err.response));
  });
  done();
};
