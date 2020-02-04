const config = require("../../config");
const axios = require("axios");
const token = require("../../config/auth");

module.exports = (fastify, opts, done) => {
  fastify.get("/categories/:category", async (request, reply) => {
    let queryString = "";
    if (Object.entries(request.query).length !== 0) {
      for (let [key, value] of Object.entries(request.query)) {
        queryString += key + "=" + value + "&";
      }
      queryString = queryString.slice(0, queryString.length - 1);
    }
    const options = (url, query, method) => {
      return {
        method: method,
        url: config.url + url + (query ? "?" + query : ""),
        json: true,
        headers: {
          "Content-Type": "application/json",
          "x-dw-client-id": config.client_id,
          Authorization: "Bearer " + token.get()
        }
      };
    };
    await axios.post("http://127.0.0.1:8000/customers/auth", { type: "guest" });

    const result = await axios(
      options("/categories/" + request.params.category, queryString)
    );
    console.log(result);
    reply.code(result.status).send(result.data.categories);
  });
  done();
};
