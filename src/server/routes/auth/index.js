const token = require("../../config/auth");
const {
  apiPostOptions,
  apiPostMethod
} = require("../../helpers/api/apiHelper");
const req = require("request");

module.exports = (fastify, opts, done) => {
  /////////////////////////////////////////////////////////////////
  // #ROUTE: POST:/customers/auth /////////////////////
  ////////////////////////////////////////////////////////////////
  fastify.post("/customers/auth/guest", async (request, reply) => {
    apiPostMethod(`/customers/auth`, "", { type: "guest" })
      .then(response => {
        reply.setCookie("token", response.headers.authorization, {
          domain: "localhost",
          path: "/"
        });
        reply.code(200).send(response.data);
      })
      .catch(err => reply.code(err.response.status).send(err.response.data));
  });

  /////////////////////////////////////////////////////////////////
  // #ROUTE: POST:/customer/refresh /////////////////////
  ////////////////////////////////////////////////////////////////
  fastify.post("/customers/auth/refresh", (request, reply) => {
    apiPostMethod(
      `/customers/auth`,
      "",
      { type: "refresh" },
      request.cookies.token
    )
      .then(response => {
        reply.setCookie("token", response.headers.authorization, {
          domain: "127.0.0.1",
          path: "/"
        });
        reply.code(200).send(response.data);
      })
      .catch(err => reply.code(err.response.status).send(err.response.data));
  });

  done();
};
