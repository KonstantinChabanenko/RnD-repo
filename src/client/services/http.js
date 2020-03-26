import api from '../config/api';
import axios from 'axios';

const { root } = api;

const requestPost = (path, data) => axios.post(
    `${root}/${path}`,
    data,
    {
      withCredentials: true, 
      headers: {
          "x-dw-client-id": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      }
    }
).then(res => res.data).catch(err => err.response.data);

const getAuthToken = () => requestPost(`customers/auth/guest`);

const refreshAuthToken = () => requestPost(`customers/auth/refresh`);

export const get = (path, params) => axios.get(
    `${root}/${path}`,
    {
      withCredentials: true,
        headers: {
            "x-dw-client-id": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        },
        params,
    }
).then(res => res.data).catch(err => err.response.data);

export const post = async (path, data) => {
  let res = await requestPost(path, data);

  if (res.fault) {
    switch (res.fault.type) {
      case "ExpiredTokenException":
        await refreshAuthToken();
        res = await requestPost(path, data);
        if (res.fault && res.fault.type === "ExpiredTokenException") {
          await getAuthToken();
          return requestPost(path, data);
        }
        return res;
      case "AuthorizationHeaderMissingException":
        await getAuthToken();
        return requestPost(path, data);
      default:
        return res;
    }
  }

  return res;
}
