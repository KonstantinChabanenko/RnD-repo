import { combineReducers } from 'redux';
import productReducer from './productReducer';
import productsReducer from './productsReducer';

export default combineReducers({
    productReducer,
    productsReducer,
})
