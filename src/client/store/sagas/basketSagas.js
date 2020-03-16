import { call, put, takeLatest } from 'redux-saga/effects';
import { createBasket } from '../../services/basketAPI';
import basketActions from '../actions/basketActions';
import basketActionTypes from '../actionTypes/basketActionTypes';

function* createBasketSaga(action) {
    try {
        const basket = yield call(createBasket, action.data);
        yield put(basketActions.createBasketSuccess(basket.data));
    } catch (error) {
        console.log(error);
        yield put(basketActions.createBasketFailure());
    }
}

export default function* watchBasketSagas() {
    yield takeLatest(basketActionTypes.CREATE_BASKET__START, createBasketSaga);
}
