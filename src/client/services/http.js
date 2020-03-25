import api from '../config/api';
import axios from 'axios';

const { root } = api;

const getAuthToken = () => requestPost(
    `customers/auth/guest`
);

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

