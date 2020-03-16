import api from '../config/api';
import axios from 'axios';

const { root } = api;

let authToken = null;

const authTokenRequestPost = (type) => axios.post(
    `${root}/customers/auth`,
    {
        type,
    },
).then(res => res.data.authorization);

const requestConfigGet = (url, params) => ({
    method: 'get',
    url,
    headers: {
        "x-dw-client-id": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        Authorization: authToken,
    },
    params,
})

export const get = async (path, params) => {
    if (!authToken) {
        authToken = authTokenRequestPost("guest");
    }

    let res = await axios.request(requestConfigGet(`${root}/${path}`, params))
        .then(res => res.data)
        .catch(err => err);

    if (res.fault && res.fault.type === "ExpiredTokenException") {
        authToken = authTokenRequestPost("refresh");
        res = axios.request(requestConfigGet(`${root}/${path}`, params))
            .then(res => res.data)
            .catch(err => err);
    }

    return res;
}
