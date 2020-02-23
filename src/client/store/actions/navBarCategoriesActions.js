import navBarCategoriesActionTypes from '../actionTypes/navBarCategoriesActionTypes';

const navBarCategoriesActions = {
    getCategoriesStart: () => ({
        type: navBarCategoriesActionTypes.GET_NAV_BAR_CATEGORIES__START,
    }),

    getCategoriesSuccess: (categories) => ({
        type: navBarCategoriesActionTypes.GET_NAV_BAR_CATEGORIES__SUCCESS,
        categories,
    }),

    getCategoriesFailure: () => ({
        type: navBarCategoriesActionTypes.GET_NAV_BAR_CATEGORIES__FAILURE,
    })
}

export default navBarCategoriesActions;
