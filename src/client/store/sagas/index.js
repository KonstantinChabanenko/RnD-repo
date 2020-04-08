import { all } from 'redux-saga/effects';
import watchProductSagas from './productSagas';
import watchCategorySagas from './categorySagas';
import watchBasketSagas from './basketSagas';

export default function* rootSaga() {
    yield all([
        watchProductSagas(),
        watchCategorySagas(),
        watchBasketSagas(),
    ])
}
