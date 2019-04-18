import React, { useContext } from 'react';

import { ShopContext } from '../../context';
import { Navigation } from '../../components';

import './cart.css';

export const Cart = props => {
    const context = useContext(ShopContext);

    return (
        <React.Fragment>
            <Navigation cartItemNumber={context.cart.length} />
            <main className="cart">
                {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
                <ul>
                    {context.cart.map(cartItem => (
                        <li key={cartItem.id}>
                            <div>
                                <strong>{cartItem.title}</strong> - ${cartItem.price} ({cartItem.quantity})
                            </div>
                            <div>
                                <button onClick={context.removeProductFromCart.bind(this, cartItem.id)}>Remove from Cart</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </main>
        </React.Fragment>
    );
};
