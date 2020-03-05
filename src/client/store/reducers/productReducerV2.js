import productActionTypes from '../actionTypes/productActionTypes';
import { applyAttribute, setSelectedVariant } from '../../scripts/product/productHelper';

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

        // case productActionTypes.SELECT_COLOR:
        //     const colorUpdatedProduct = { ...state.currentProduct };
        //     const colorValue = action.colorValue;
        //     colorUpdatedProduct.selectedColor = colorValue;
        //     applyAttribute(colorUpdatedProduct, 'sizes', 'c_color', 'c_size', colorValue);

        //     return {
        //         ...state,
        //         currentProduct: colorUpdatedProduct,
        //         currentVariant: colorUpdatedProduct.selectedSize && colorUpdatedProduct.selectedColor ? setSelectedVariant(colorUpdatedProduct) : null,
        //     }

        // case productActionTypes.SELECT_SIZE:
        //     const sizeUpdatedProduct = { ...state.currentProduct };
        //     const sizeValue = action.sizeValue;
        //     sizeUpdatedProduct.selectedSize = sizeValue;
        //     applyAttribute(sizeUpdatedProduct, 'colors', 'c_size', 'c_color', sizeValue);

        //     return {
        //         ...state,
        //         currentProduct: sizeUpdatedProduct,
        //         currentVariant: sizeUpdatedProduct.selectedColor && sizeUpdatedProduct.selectedSize ? setSelectedVariant(sizeUpdatedProduct) : null,
        //     }

        default:
            return state;
    }
}

export default productReducerV2;
