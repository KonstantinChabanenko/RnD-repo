const request = require("request");
const config = require("../config");
const token = require("../config/auth");

export const get = (url) => {
  let options = token.get()
    ? {
        method: "GET",
        url: config.url + url,
        headers: {
          "x-dw-client-id": config.client_id,
          Authorization: "Bearer " + token.get()
        }
      }
    : {
        method: "GET",
        url: config.url + url,
        headers: {
          "x-dw-client-id": config.client_id
        }
      };

  request(options, function(error, response) {
    if (error) throw new Error(error);
    return response;
  });
};

export const post = (url, data) => {
  let options = token.get()
    ? {
        method: "POST",
        url: config.url + url,
        headers: {
          "x-dw-client-id": config.client_id,
          "Content-Type": "application/json",
          Authorization: "Bearer " + token.get()
        },
        json: true,
        body: data
      }
    : {
        method: "POST",
        url: config.url + url,
        json: true,
        headers: {
          "Content-Type": "application/json",
          "x-dw-client-id": config.client_id
        },
        body: data
      };
      let result ="";
    request(options, function(error, response) {
    if (error) throw new Error(error);
    result = response;
    return response;
  }).on('response', () => {return result});

};