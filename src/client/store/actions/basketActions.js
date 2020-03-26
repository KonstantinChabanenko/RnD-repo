import basketActionTypes from '../actionTypes/basketActionTypes';

const basketActions = {
    createBasketStart: (data) => ({
        type: basketActionTypes.CREATE_BASKET__START,
        data,
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
