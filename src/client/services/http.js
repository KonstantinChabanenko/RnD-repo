import api from '../config/api';
import axios from 'axios';

const { root } = api;

export const get_auth_token = axios.post(
    `${root}/customers/auth`,
    {
        type: "guest",
    },
).then(res => res.data.authorization);

const get = (path, params) => axios.get(
    `${root}/${path}`,
    {
        headers: {
            "x-dw-client-id": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        },
        params,
    }
).then(res => res.data).catch(err => err);

export const getProduct = (id, params) => get(`products/${id}`, params);
