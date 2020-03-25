import { post } from './http';

export const createBasket = (data) => post('baskets', data);
