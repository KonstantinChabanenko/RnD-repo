import { get } from './http';

export const getCategories = (categoryId, params) => get(`categories/${categoryId}`, params);
