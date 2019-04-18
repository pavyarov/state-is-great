import * as React from 'react';
import { connect } from 'react-redux';

import { Navigation } from '../../components';
import { removeProductFromCart } from '../../store/actions';
import './cart.css';

const mapStateToProps = state => {
    return {
        cartItems: state.cart,
        cartItemCount: state.cart.length
    };
};

const mapDispatchToProps = dispatch => {
    return {
        removeProductFromCart: id => dispatch(removeProductFromCart(id))
    };
};

export const Cart = connect(
    mapStateToProps,
    mapDispatchToProps
)(({ cartItems, cartItemCount, removeProductFromCart }) => (
    <React.Fragment>
        <Navigation cartItemNumber={cartItemCount} />
        <main className="cart">
            {cartItems.length <= 0 && <p>No Item in the Cart!</p>}
            <ul>
                {cartItems.map(cartItem => (
                    <li key={cartItem.id}>
                        <div>
                            <strong>{cartItem.title}</strong> - ${cartItem.price} ({cartItem.quantity})
                        </div>
                        <div>
                            <button onClick={() => removeProductFromCart(cartItem.id)}>Remove from Cart</button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    </React.Fragment>
));
