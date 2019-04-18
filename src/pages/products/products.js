import React, { useContext } from 'react';

import { Navigation } from '../../components';
import { ShopContext } from '../../context';
import './products.css';

export const Products = props => {
    const context = useContext(ShopContext);

    return (
        <React.Fragment>
            <Navigation cartItemNumber={context.cart.length} />
            <main className="products">
                <ul>
                    {context.products.map(product => (
                        <li key={product.id}>
                            <div>
                                <strong>{product.title}</strong> - ${product.price}
                            </div>
                            <div>
                                <button onClick={context.addProductToCart.bind(this, product)}>Add to Cart</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </main>
        </React.Fragment>
    );
};
