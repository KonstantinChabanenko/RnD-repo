import { call, put, takeEvery } from 'redux-saga/effects';
import productActionTypes from '../actionTypes/productActionTypes';
import { getProductDetails } from '../../services/productAPI';

function* getProductByIdSaga(action) {
    try {
        const currentProduct = yield call(getProductDetails, action.productId);
        yield put({ type: productActionTypes.GET_PRODUCT_BY_ID__SUCCESS, currentProduct });
    }

    catch(error) {
        console.log(error);
        yield put({ type: productActionTypes.GET_PRODUCT_BY_ID__FAILURE });
    }
}

export default function* watchProductSagas() {
    yield takeEvery(productActionTypes.GET_PRODUCT_BY_ID__START, getProductByIdSaga);
}
