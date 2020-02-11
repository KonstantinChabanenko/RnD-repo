import productActionTypes from '../actionTypes/productActionTypes';

const initState = {
    currentProduct: null,
    isLoading: false,
}

const productReducer = (state = initState, action) => {
    switch (action.type) {
        case productActionTypes.GET_PRODUCT_BY_ID__START:
            return {
                ...state,
                isLoading: true,
            }

        case productActionTypes.GET_PRODUCT_BY_ID__SUCCESS:
            return {
                currentProduct: currentProduct,
                isLoading: false,
            }

        case productActionTypes.GET_PRODUCT_BY_ID__FAILURE:
            return {
                currentProduct: null,
                isLoading: false,
            }
        default:
            return state;
    }
}

export default productReducer;
