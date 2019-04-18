import React, { Component } from 'react';

import { ShopContext } from './shop-context';

export class GlobalState extends Component {
    state = {
        products: [
            { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
            { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
            { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
            { id: 'p4', title: 'Half-dried plant', price: 2.99 }
        ],
        cart: []
    };

    addProductToCart = product => {
        setTimeout(() => {
            this.setState(({ cart }) => ({
                cart: [...cart, product]
            }));
        }, 700);
    };

    removeProductFromCart = productId => {
        setTimeout(() => {
            this.setState(({ cart }) => ({
                cart: cart.filter(item => item.id !== productId)
            }));
        }, 700);
    };

    render() {
        return (
            <ShopContext.Provider
                value={{
                    products: this.state.products,
                    cart: this.state.cart,
                    addProductToCart: this.addProductToCart,
                    removeProductFromCart: this.removeProductFromCart
                }}
            >
                {this.props.children}
            </ShopContext.Provider>
        );
    }
}
