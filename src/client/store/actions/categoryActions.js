import categoryActionTypes from '../actionTypes/categoryActionTypes';

const categoryActions = {
    getCategoriesStart: (categoryId) => ({
        type: categoryActionTypes.GET_CATEGORIES__START,
        categoryId,
    }),

    getCategoriesSuccess: (categories) => ({
        type: categoryActionTypes.GET_CATEGORIES__SUCCESS,
        categories,
    }),

    getCategoriesFailure: () => ({
        type: categoryActionTypes.GET_CATEGORIES__FAILURE,
    })
}

export default categoryActions;
