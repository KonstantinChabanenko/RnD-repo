import { get } from './http';

export const getProducts = (categoryId) => get(`producttiles/${categoryId}`);
