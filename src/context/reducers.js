export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const addProductToCart = product => {
    return { type: ADD_PRODUCT, payload: product };
};

export const removeProductFromCart = (productId, state) => {
    return { type: REMOVE_PRODUCT, payload: productId };
};

export const shopReducer = (state, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return { ...state, cart: [...state.cart, action.payload] };
        case REMOVE_PRODUCT:
            return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };

        default:
            return state;
    }
};
