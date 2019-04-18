import * as React from 'react';

import { Navigation } from '../../components';
import { ShopContext } from '../../context';
import './products.css';

export class Products extends React.Component {
    render() {
        return (
            <ShopContext.Consumer>
                {({ cart, products, addProductToCart }) => {
                    return (
                        <React.Fragment>
                            <Navigation cartItemNumber={cart.length} />
                            <main className="products">
                                <ul>
                                    {products.map(product => (
                                        <li key={product.id}>
                                            <div>
                                                <strong>{product.title}</strong> - ${product.price}
                                            </div>
                                            <div>
                                                <button onClick={addProductToCart.bind(this, product)}>Add to Cart</button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </main>
                        </React.Fragment>
                    );
                }}
            </ShopContext.Consumer>
        );
    }
}
