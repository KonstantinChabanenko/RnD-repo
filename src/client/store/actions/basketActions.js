import basketActionTypes from '../actionTypes/basketActionTypes';

const basketActions = {
    createBasketStart: (data, authToken) => ({
        type: basketActionTypes.CREATE_BASKET__START,
        data,
        authToken,
    }),
    createBasketSuccess: (basket) => ({
        type: basketActionTypes.CREATE_BASKET__SUCCESS,
        basket,
    }),
    createBasketFailure: () => ({
        type: basketActionTypes.CREATE_BASKET__FAILURE,
    }),
}

export default basketActions;
