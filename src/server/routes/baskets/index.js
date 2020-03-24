const config = require("../../config");
const req = require("request");
const axios = require("axios");
const {
  apiGetOptions,
  queryStringBuilder,
  apiPostOptions,
  apiDeleteOptions,
  apiPostMethod,
  apiPatchMethod
} = require("../../helpers/api/apiHelper");

module.exports = (fastify, opts, done) => {
  /////////////////////////////////////////////////////////////////
  // #ROUTE: POST:/baskets /////////////////////
  ////////////////////////////////////////////////////////////////
  fastify.post("/baskets", (request, reply) => {
      apiPostMethod(
        '/baskets',
        "",
        null,
        request.cookies.token
        )
      .then(response => reply.code(200).send(response.data))
      .catch(error => reply.code(error.response.status).send(error.response.data));
  });

  ////////////////////////////////////////////////////////////////
  // #ROUTE: GET:/basket/:basket_id /////////////////////////////
  //////////////////////////////////////////////////////////////
  fastify.get("/baskets/:basket_id", (request, reply) => {
    axios(
      apiGetOptions(
        `/baskets/` + request.params.basket_id,
        "",
        request.cookies.token
      )
    )
      .then(response => reply.code(200).send(response.data))
      .catch(error => reply.code(500).send(error.response.data));
  });

  ////////////////////////////////////////////////////////////////
  // #ROUTE: DELETE:/basket/:basket_id //////////////////////////
  //////////////////////////////////////////////////////////////
  fastify.delete("/baskets/:basket_id", (request, reply) => {
    axios(
      apiDeleteOptions(
        `/baskets/` + request.params.basket_id,
        "",
        request.cookies.token
      )
    )
      .then(response => reply.code(204).send())
      .catch(error => reply.code(500).send(error.response.data));
  });

  ////////////////////////////////////////////////////////////////
  // #ROUTE: POST:/baskets/:basket_id/items /////////////////////
  //////////////////////////////////////////////////////////////
  fastify.post("/baskets/:basket_id/items", (request, reply) => {
    apiPostMethod(
      `/baskets/${request.params.basket_id}/items`,
      "",
      request.body,
      request.cookies.token
    )
      .then(response => reply.code(200).send(response.data))
      .catch(err => reply.code(500).send(err.response.data));
  });

  /////////////////////////////////////////////////////////////////
  // #ROUTE: PATCH:/baskets/:basket_id/items /////////////////////
  ///////////////////////////////////////////////////////////////
  fastify.patch("/baskets/:basket_id/items/:item_id", (request, reply) => {
    apiPatchMethod(
      `/baskets/${request.params.basket_id}/items/${request.params.item_id}`,
      "",
      request.body,
      request.cookies.token
    )
      .then(response => reply.code(200).send(response.data))
      .catch(err => reply.code(500).send(err.response.data));
  });

    ////////////////////////////////////////////////////////////////
  // #ROUTE: DELETE:/basket/:basket_id/items/:item_id /////////////
  ////////////////////////////////////////////////////////////////
  fastify.delete("/baskets/:basket_id/items/:item_id", (request, reply) => {
    axios(
      apiDeleteOptions(
        `/baskets/${request.params.basket_id}/items/${request.params.item_id}`,
        "",
        request.cookies.token
      )
    )
      .then(response => reply.code(204).send(response.data))
      .catch(error => reply.code(500).send(error.response.data));
  });
  done();
};
