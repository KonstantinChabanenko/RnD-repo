import api from '../config/api';
import axios from 'axios';

const { root } = api;
// let authToken = null;

// const authTokenRequestPost = (type) => axios.post(
//     `${root}/customers/auth`,
//     {
//         type,
//     },
// ).then(res => res.data.authorization);

// const checkAuthTokenExpiration = (res) => {
//     if (res.fault && res.fault.type === "ExpiredTokenException") {
//         authToken = authTokenRequestPost("refresh");
//         return true;
//     } else {
//         return false;
//     }
// }

// const requestGet = (path, params) => axios.get(
//     `${root}/${path}`,
//     {
//         headers: {
//             "x-dw-client-id": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//             Authorization: authToken,
//         },
//         params,
//     }
// ).then(res => res.data).catch(err => err.response.data);

// export const get = async (path, params) => {
//     if (!authToken) {
//         authToken = await authTokenRequestPost("guest");
//     }

//     let res = await requestGet(path, params);
//     const authTokenHasExpired = checkAuthTokenExpiration(res);

//     if (authTokenHasExpired) {
//         res = requestGet(path, params);
//     }

//     return res;
// }

// const requestPost = (path, data) => axios.post(
//     `${root}/${path}`,
//     data,
//     {
//         headers: {
//             "x-dw-client-id": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//             Authorization: authToken,
//         }
//     }
// ).then(res => res.data).catch(err => err);

// export const post = async (path, data) => {
//     if (!authToken) {
//         authToken = await authTokenRequestPost("guest");
//     }

//     let res = await requestPost(path, data);
//     const authTokenHasExpired = checkAuthTokenExpiration(res);

//     if (authTokenHasExpired) {
//         res = requestPost(path, data);
//     }

//     return res;
// }

export const get = (path, params) => axios.get(
    `${root}/${path}`,
    {
        headers: {
            "x-dw-client-id": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        },
        params,
    }
).then(res => res.data).catch(err => err.response.data);

export const post = (path, data) => axios.post(
    `${root}/${path}`,
    data,
    {
        headers: {
            "x-dw-client-id": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        }
    }
).then(res => res.data).catch(err => err);
