import { combineReducers } from 'redux';
// import productReducer from './productReducer';
import productsReducer from './productsReducer';
import categoryReducer from './categoryReducer';
import navBarCategoriesReducer from './navBarCategoriesReducer';
import productReducerV2 from './productReducerV2';

export default combineReducers({
    // productReducer,
    productsReducer,
    categoryReducer,
    navBarCategoriesReducer,
    productReducerV2,
})
