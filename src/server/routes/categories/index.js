const config = require("../../config");
const axios = require("axios");
const token = require("../../config/auth");
const {apiGetOptions, queryStringBuilder} = require("../../helpers/api/apiHelper");

module.exports = (fastify, opts, done) => {
  fastify.get("/categories/:category", async (request, reply) => {
    let queryString = queryStringBuilder(request.query);

    await axios.post("http://127.0.0.1:8000/customers/auth", { type: "guest" });

    const result = await axios(
      apiGetOptions("/categories/" + request.params.category, queryString)
    );
    reply.code(result.status).send(result.data.categories);
  });
  done();
};
