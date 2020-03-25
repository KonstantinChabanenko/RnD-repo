import api from '../config/api';
import axios from 'axios';

const { root } = api;

export const getAuthToken = () => requestPost(
    `customers/auth/guest`
);

export const requestPost = (path, data, token) => axios.post(
    `${root}/${path}`,
    data,
    {
      withCredentials: true, 
        headers: {
            "x-dw-client-id": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        }
    }
).then(res => res.data).catch(err => err.response.data);

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
  let token = await getAuthToken();
  return requestPost('baskets', data, token);
}