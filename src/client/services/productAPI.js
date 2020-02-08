import { get } from './http';

export const getProducts = (categoryId, params) => get(`producttiles/${categoryId}`, params);
export const getProductDetails = (productId) => get(`product/details/${productId}`);
