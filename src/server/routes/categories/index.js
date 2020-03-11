const config = require("../../config");
const axios = require("axios");
const token = require("../../config/auth");
const {apiGetOptions, queryStringBuilder} = require("../../helpers/api/apiHelper");

module.exports = (fastify, opts, done) => {
  fastify.get("/categories/:category", async (request, reply) => {
    let queryString = queryStringBuilder(request.query);

    const result = await axios(
      apiGetOptions("/categories/" + request.params.category, queryString, request.headers.authorization)
    );
    reply.code(result.status).send(result.data.categories);
  });
  done();
};
