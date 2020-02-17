const config = require("../../config");
const token = require("../../config/auth");

export const apiGetOptions = (url, query) => {
  return {
    method: "GET",
    url: config.url + url + (query ? "?" + query : ""),
    json: true,
    headers: {
      "Content-Type": "application/json",
      "x-dw-client-id": config.client_id,
      Authorization: "Bearer " + token.get()
    }
  };
};
export const apiPostOptions = (url, query, body) => {
  return {
      method: "POST",
      url: config.url + url + (query ? "?" + query : ""),
      json: true,
      headers: {
        "Content-Type": "application/json",
        "x-dw-client-id": config.client_id
      },
      body: body
  };
};

export const queryStringBuilder = (query) => {
  let queryString = '';
  if (Object.entries(query).length !== 0) {
    for (let [key, value] of Object.entries(query)) {
     queryString += key + '=' + value + '&';
    }
    queryString = queryString.slice(0, queryString.length-1);
    }

    return queryString;
}
