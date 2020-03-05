import { get, getV2 } from './http';

export const getProducts = (params) => get(`producttiles`, params);
export const getProductDetails = (productId) => get(`product/details/${productId}`);
export const getProductDetailsV2 = (productId) => get('product', { pid: productId });
