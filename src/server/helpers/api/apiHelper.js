const config = require("../../config");
const axios = require("axios");

export const apiGetOptions = (url, query, userToken) => {
  return {
    method: "GET",
    url: config.url + url + (query ? "?" + query : ""),
    json: true,
    headers: {
      "Content-Type": "application/json",
      "x-dw-client-id": config.client_id,
      Authorization: userToken
    }
  };
};

export const apiDeleteOptions = (url, query, userToken) => {
  return {
    method: "DELETE",
    url: config.url + url + (query ? "?" + query : ""),
    json: true,
    headers: {
      "Content-Type": "application/json",
      "x-dw-client-id": config.client_id,
      Authorization: userToken
    }
  };
};

export const apiPostOptions = (url, query, body, userToken) => {
  return {
    method: "POST",
    url: config.url + url + (query ? "?" + query : ""),
    json: true,
    headers: {
      "Content-Type": "application/json",
      "x-dw-client-id": config.client_id,
      Authorization: userToken
    },
    body: body
  };
};

export const apiPostMethod = (url, query, body, userToken) => {
  return axios.post(
    config.url + url + (query ? "?" + query : ""),
    JSON.stringify(body),
    {
      headers: {
        "Content-Type": "application/json",
        "x-dw-client-id": config.client_id,
        Authorization: userToken,
      }
    }
  );
};

export const apiPatchMethod = (url, query, body, userToken) => {
  return axios.patch(
    config.url + url + (query ? "?" + query : ""),
    body,
    {
      headers: {
        "Content-Type": "application/json",
        "x-dw-client-id": config.client_id,
        Authorization: userToken,
      }
    }
  );
};

export const queryStringBuilder = query => {
  let queryString = "";
  if (Object.entries(query).length !== 0) {
    for (let [key, value] of Object.entries(query)) {
      queryString += key + "=" + value + "&";
    }
    queryString = queryString.slice(0, queryString.length - 1);
  }

  return queryString;
};
