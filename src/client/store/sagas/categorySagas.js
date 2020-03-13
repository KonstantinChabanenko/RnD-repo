import { call, put, takeLatest } from 'redux-saga/effects';
import categoryActionTypes from '../actionTypes/categoryActionTypes';
import { getCategories } from '../../services/categoryAPI';
import { get_auth_token } from '../../services/http';
import categoryActions from '../actions/categoryActions';
import navBarCategoriesActionTypes from '../actionTypes/navBarCategoriesActionTypes';
import navBarCategoriesActions from '../actions/navBarCategoriesActions';

function* getCategoriesSaga(action) {
    try {
        const categories = yield call(getCategories, action.categoryId);
        yield put(categoryActions.getCategoriesSuccess(categories));
    }

    catch(error) {
        yield put(categoryActions.getCategoriesFailure());
    }
}

function* getNavBarCategoriesSaga() {
    try {
        const token = yield call(get_auth_token);
        const categories = yield call(getCategories, "root", { levels: 5 }, token);
        yield put(navBarCategoriesActions.getCategoriesSuccess(categories));
    }

    catch(error) {
        yield put(navBarCategoriesActions.getCategoriesFailure());
    }
}

export default function* watchCategorySagas() {
    yield takeLatest(categoryActionTypes.GET_CATEGORIES__START, getCategoriesSaga);
    yield takeLatest(navBarCategoriesActionTypes.GET_NAV_BAR_CATEGORIES__START, getNavBarCategoriesSaga);
}
