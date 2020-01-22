import api from '../config/api';
import axios from 'axios';

const { root } = api;

export const get_auth_token = axios.post(
    `${root}/customers/auth`,
    {
        type: "guest",
    },
)

const get = async (path, params) => {
    const auth_token = get_auth_token();
    const data = await axios.get(
        `${root}/${path}`,
        {
            headers: {
                Authorization: auth_token,
                "x-dw-client-id": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            },
            params,
        }
    );

    return data.data;
}

export const getProduct = (id, params) => get(`products/${id}`, params);
