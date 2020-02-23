import navBarCategoriesActionTypes from '../actionTypes/navBarCategoriesActionTypes';

const initState = {
    categories: null,
    isLoading: false,
}

const navBarCategoriesReducer = (state = initState, action) => {
    switch (action.type) {
        case navBarCategoriesActionTypes.GET_NAV_BAR_CATEGORIES__START:
            return {
                ...state,
                isLoading: true,
            }
        case navBarCategoriesActionTypes.GET_NAV_BAR_CATEGORIES__SUCCESS:
            return {
                categories: action.categories,
                isLoading: false,
            }
        case navBarCategoriesActionTypes.GET_NAV_BAR_CATEGORIES__FAILURE:
            return {
                categories: null,
                isLoading: false,
            }
        default:
            return state;
    }
}

export default navBarCategoriesReducer;
