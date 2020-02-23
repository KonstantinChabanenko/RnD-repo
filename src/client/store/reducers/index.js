import { combineReducers } from 'redux';
import productReducer from './productReducer';
import productsReducer from './productsReducer';
import categoryReducer from './categoryReducer';
import navBarCategoriesReducer from './navBarCategoriesReducer';

export default combineReducers({
    productReducer,
    productsReducer,
    categoryReducer,
    navBarCategoriesReducer,
})
