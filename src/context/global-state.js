import React, { useReducer } from 'react';

import { ShopContext } from './shop-context';
import { shopReducer, addProductToCart, removeProductFromCart } from './reducers';

export const GlobalState = props => {
    const products = [
        { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
        { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
        { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
        { id: 'p4', title: 'Half-dried plant', price: 2.99 }
    ];
    const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

    const handleAddProductToCart = product => {
        setTimeout(() => {
            dispatch(addProductToCart(product));
        }, 700);
    };

    const handleRemoveProductFromCart = productId => {
        setTimeout(() => {
            dispatch(removeProductFromCart(productId));
        }, 700);
    };

    return (
        <ShopContext.Provider
            value={{
                products: products,
                cart: cartState.cart,
                addProductToCart: handleAddProductToCart,
                removeProductFromCart: handleRemoveProductFromCart
            }}
        >
            {props.children}
        </ShopContext.Provider>
    );
};
