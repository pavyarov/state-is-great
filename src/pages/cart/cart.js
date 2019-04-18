import * as React from 'react';

import { Navigation } from '../../components';
import { ShopContext } from '../../context';

import './cart.css';

export class Cart extends React.Component {
    static contextType = ShopContext;

    render() {
        return (
            <React.Fragment>
                <Navigation cartItemNumber={this.context.cart.length} />
                <main className="cart">
                    {this.context.cart.length <= 0 && <p>No Item in the Cart!</p>}
                    <ul>
                        {this.context.cart.map(cartItem => (
                            <li key={cartItem.id}>
                                <div>
                                    <strong>{cartItem.title}</strong> - ${cartItem.price} ({cartItem.quantity})
                                </div>
                                <div>
                                    <button onClick={this.context.removeProductFromCart.bind(this, cartItem.id)}>Remove from Cart</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </main>
            </React.Fragment>
        );
    }
}
