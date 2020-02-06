import { get } from './http';

export const getProducts = (categoryId, params) => get(`producttiles/${categoryId}`, params);
