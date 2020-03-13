import { get } from './http';

export const getCategories = (categoryId, params, token) => get(`categories/${categoryId}`, params, token);
