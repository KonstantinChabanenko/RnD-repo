import { call, put, takeLatest } from 'redux-saga/effects';
import { createBasket } from '../../services/basketAPI';
import basketActions from '../actions/basketActions';
import basketActionTypes from '../actionTypes/basketActionTypes';

function* createBasketSaga(action) {
    const { data, authToken } = action;
    try {
        const basket = yield call(createBasket, data, authToken);
        yield put(basketActions.createBasketSuccess(basket));
    } catch (error) {
        console.log(error);
        yield put(basketActions.createBasketFailure());
    }
}

export default function* watchBasketSagas() {
    yield takeLatest(basketActionTypes.CREATE_BASKET__START, createBasketSaga);
}
