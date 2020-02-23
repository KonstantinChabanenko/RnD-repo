import { call, put, takeLatest } from 'redux-saga/effects';
import productActionTypes from '../actionTypes/productActionTypes';
import { getProductDetails, getProducts } from '../../services/productAPI';

function* getProductByIdSaga(action) {
    try {
        const currentProduct = yield call(getProductDetails, action.productId);
        yield put({ type: productActionTypes.GET_PRODUCT_BY_ID__SUCCESS, currentProduct });
    }

    catch (error) {
        yield put({ type: productActionTypes.GET_PRODUCT_BY_ID__FAILURE });
    }
}

function* getProductsSaga(action) {
    const { selectedRefinements, selectedSortingOption } = action;
    const params = {};

    Object.keys(selectedRefinements).forEach((key, index) => {
        switch (key) {
            case 'categoryId':
                params[`refine_${index}`] = `cgid=${selectedRefinements[key]}`;
                break;
            case 'colors':
                params[`refine_${index}`] = `c_refinementColor=${selectedRefinements[key].join('|')}`;
                break;
            case 'isNew':
                if (selectedRefinements.isNew) {
                    params[`refine_${index}`] = `c_isNew`;
                }
                break;
            case 'sizes':
                params[`refine_${index}`] = `c_size=${selectedRefinements[key].join('|')}`;
                break;
            case 'price':
                params[`refine_${index}`] = `price=${selectedRefinements[key]}`;
                break;
            default:
                return null;
        }
    });

    if (selectedSortingOption) {
        params.sort = selectedSortingOption;
    }

    try {
        const response = yield call(getProducts, params);
        yield put({
            type: productActionTypes.GET_PRODUCTS__SUCCESS,
            products: response.products,
            refinements: response.refinements,
            sortingOptions: response.sortingOptions,
        });
    }

    catch (error) {
        yield put({ type: productActionTypes.GET_PRODUCTS__FAILURE });
    }
}

function* selectRefinementSaga(action) {
    const selectedRefinements = { ...action.selectedRefinements, [action.refinementKey]: action.refinementValue };
    yield put({
        type: productActionTypes.GET_PRODUCTS__START,
        selectedRefinements,
        selectedSortingOption: action.selectedSortingOption
    });
}

function* selectSortingOption(action) {
    const { selectedRefinements, selectedSortingOption } = action;
    yield put({ type: productActionTypes.GET_PRODUCTS__START, selectedRefinements, selectedSortingOption });
}

export default function* watchProductSagas() {
    yield takeLatest(productActionTypes.GET_PRODUCT_BY_ID__START, getProductByIdSaga);
    yield takeLatest(productActionTypes.GET_PRODUCTS__START, getProductsSaga);
    yield takeLatest(productActionTypes.SELECT_REFINEMENT, selectRefinementSaga);
    yield takeLatest(productActionTypes.SELECT_SORTING_OPTION, selectSortingOption);
}
