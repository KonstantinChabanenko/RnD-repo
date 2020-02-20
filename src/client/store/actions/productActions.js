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
    }),

    getProductsStart: (selectedRefinements) => (
        {
            type: productActionTypes.GET_PRODUCTS__START,
            selectedRefinements,
        }
    ),

    selectRefinement: (refinementKey, refinementValue, selectedRefinements, selectedSortingOption) => (
        {
            type: productActionTypes.SELECT_REFINEMENT,
            refinementKey,
            refinementValue,
            selectedRefinements,
            selectedSortingOption,
        }
    ),

    selectSortingOption: (selectedRefinements, selectedSortingOption) => (
        {
            type: productActionTypes.SELECT_SORTING_OPTION,
            selectedRefinements,
            selectedSortingOption,
        }
    ),

    resetFilters: () => ({
        type: productActionTypes.RESET_FILTERS,
    })
};

export default productActions;
