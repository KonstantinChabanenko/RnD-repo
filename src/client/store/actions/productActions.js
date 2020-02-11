import productActionTypes from '../actionTypes/productActionTypes';

export const productActions = {
    getProductByIdStart: product_id => ({
        type: productActionTypes.GET_PRODUCT_BY_ID__START,
        product_id,
    }),
      
    getProductByIdSuccess: (product) => ({
        type: productActionTypes.GET_PRODUCT_BY_ID__SUCCESS,
        product,
    }),
    
    getProductByIdFailure: () => ({
        type: productActionTypes.GET_PRODUCT_BY_ID__FAILURE,
    }),
};
