import productActionTypes from '../actionTypes/productActionTypes';

const productActions = {
    getProductByIdStart: productId => ({
        type: productActionTypes.GET_PRODUCT_BY_ID__START,
        productId,
    }),
      
    getProductByIdSuccess: (product) => ({
        type: productActionTypes.GET_PRODUCT_BY_ID__SUCCESS,
        product,
    }),
    
    getProductByIdFailure: () => ({
        type: productActionTypes.GET_PRODUCT_BY_ID__FAILURE,
    }),

    selectColor: (colorValue) => ({
        type: productActionTypes.SELECT_COLOR,
        colorValue,
    }),

    selectSize: (sizeValue) => ({
        type: productActionTypes.SELECT_SIZE,
        sizeValue,
    })
};

export default productActions;
