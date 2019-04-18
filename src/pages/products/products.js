import * as React from 'react';
import { connect } from 'react-redux';

import { Navigation } from '../../components';
import { addProductToCart } from '../../store/actions';
import './products.css';

const mapStateToProps = state => {
    return {
        products: state.products,
        cartItemCount: state.cart.length
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addProductToCart: product => dispatch(addProductToCart(product))
    };
};

export const Products = connect(
    mapStateToProps,
    mapDispatchToProps
)(({ products, cartItemCount, addProductToCart }) => (
    <React.Fragment>
        <Navigation cartItemNumber={cartItemCount} />
        <main className="products">
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <div>
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                        <div>
                            <button onClick={() => addProductToCart(product)}>Add to Cart</button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    </React.Fragment>
));
