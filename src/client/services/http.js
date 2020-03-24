import api from '../config/api';
import axios from 'axios';

const { root } = api;

const getAuthToken = () => axios.post(
    `${root}/customers/auth/guest`,
);

const requestPost = (path, data, authToken) => axios.post(
    `${root}/${path}`,
    data,
    {
        headers: {
            "x-dw-client-id": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            Authorization: authToken,
        }
    }
).then(res => res.data).catch(err => err.response.data);

export const get = (path, params) => axios.get(
    `${root}/${path}`,
    {
        headers: {
            "x-dw-client-id": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        },
        params,
    }
).then(res => res.data).catch(err => err.response.data);

export const post = async (path, data, authToken) => {
    if (!authToken) {
        const newAuthToken = await getAuthToken();
        return requestPost(path, data, newAuthToken);
    }
}
