import basketActionTypes from '../actionTypes/basketActionTypes';

const initState = {
    currentBasket: null,
}

const basketReducer = (state = initState, action) => {
    switch (action.type) {
        case basketActionTypes.CREATE_BASKET__START:
            return state;
        case basketActionTypes.CREATE_BASKET__SUCCESS:
            return {
                currentBasket: action.basket,
            }
        case basketActionTypes.CREATE_BASKET__FAILURE:
            return {
                currentBasket: null,
            }
        default:
            return state;
    }
}

export default basketReducer;
