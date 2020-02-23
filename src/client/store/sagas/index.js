import { all } from 'redux-saga/effects';
import watchProductSagas from './productSagas';
import watchCategorySagas from './categorySagas';

export default function* rootSaga() {
    yield all([
        watchProductSagas(),
        watchCategorySagas(),
    ])
}
