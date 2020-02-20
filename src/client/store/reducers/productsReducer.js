import productActionTypes from '../actionTypes/productActionTypes';

const initState = {
    products: null,
    isLoading: false,
    refinements: null,
    sortingOptions: null,
    selectedRefinements: null,
    selectedSortingOption: "best-matches",
}

const productsReducer = (state = initState, action) => {
    switch (action.type) {
        case productActionTypes.GET_PRODUCTS__START:
            return {
                ...state,
                isLoading: true,
            }

        case productActionTypes.GET_PRODUCTS__SUCCESS:
            return {
                ...state,
                products: action.products,
                refinements: action.refinements,
                sortingOptions: action.sortingOptions,
                isLoading: false,
            }

        case productActionTypes.SELECT_REFINEMENT:
            return {
                ...state,
                selectedRefinements: {
                    ...state.selectedRefinements,
                    [action.refinementKey]: action.refinementValue,
                }
            }

        case productActionTypes.SELECT_SORTING_OPTION:
            return {
                ...state,
                selectedSortingOption: action.selectedSortingOption,
            }

        case productActionTypes.RESET_FILTERS:
            return {
                ...state,
                selectedRefinements: null,
                selectedSortingOption: "best-matches",
            }

        default:
            return state;
    }
}

export default productsReducer;
