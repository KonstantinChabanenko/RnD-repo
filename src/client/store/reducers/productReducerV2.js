import productActionTypes from '../actionTypes/productActionTypes';

const initState = {
    currentProduct: null,
    isLoading: false,
    currentVariant: null,
}

const productReducerV2 = (state = initState, action) => {
    switch (action.type) {
        case productActionTypes.GET_PRODUCT_BY_ID__START:
            return {
                ...state,
                isLoading: true,
            }

        case productActionTypes.GET_PRODUCT_BY_ID__SUCCESS:
            return {
                currentProduct: action.currentProduct,
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

export default productReducerV2;
