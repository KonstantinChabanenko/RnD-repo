import categoryActionTypes from '../actionTypes/categoryActionTypes';

const initState = {
    categories: null,
    isLoading: false,
}

const categoryReducer = (state = initState, action) => {
    switch (action.type) {
        case categoryActionTypes.GET_CATEGORIES__START:
            return {
                ...state,
                isLoading: true,
            }
        case categoryActionTypes.GET_CATEGORIES__SUCCESS:
            return {
                categories: action.categories,
                isLoading: false,
            }
        case categoryActionTypes.GET_CATEGORIES__FAILURE:
            return {
                categories: null,
                isLoading: false,
            }
        default:
            return state;
    }
}

export default categoryReducer;
