import { get } from './http';

export const getProducts = (params) => get(`producttiles`, params);
export const getProductDetails = (productId) => get(`product/details/${productId}`);
