import { call, put, takeLatest } from 'redux-saga/effects';
import categoryActionTypes from '../actionTypes/categoryActionTypes';
import { getCategories } from '../../services/categoryAPI';
import categoryActions from '../actions/categoryActions';

function* getCategoriesSaga(action) {
    try {
        const categories = yield call(getCategories, action.categoryId);
        yield put(categoryActions.getCategoriesSuccess(categories));
    }

    catch(error) {
        yield put(categoryActions.getCategoriesFailure());
    }
}

export default function* watchCategorySagas() {
    yield takeLatest(categoryActionTypes.GET_CATEGORIES__START, getCategoriesSaga)
}
