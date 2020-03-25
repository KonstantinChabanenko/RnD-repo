import { requestPost } from './http';

export const createBasket = (data) => requestPost('baskets', data);
