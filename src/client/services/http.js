import api from '../config/api';
import axios from 'axios';

const { root } = api;

export const get_auth_token = () => axios.post(
    `${root}/customers/auth`,
    {
        type: "guest",
    },
).then(res => res.data.authorization);

let auth_token;

export const get = (path, params, token) => {
    if (token) {
        auth_token = token;
    }

    return axios.get(
        `${root}/${path}`,
        {
            headers: {
                "x-dw-client-id": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                "Authorization": auth_token,
            },
            params,
        }
    ).then(res => res.data).catch(err => err)
};
