import { post } from './http';

export const createBasket = (data, authToken) => post('baskets', data, authToken);
