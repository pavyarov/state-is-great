import React from 'react';
import { NavLink } from 'react-router-dom';

import './navigation.css';

export const Navigation = ({ cartItemNumber }) => (
    <header className="navigation">
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Products</NavLink>
                </li>
                <li>
                    <NavLink to="/cart">Cart ({cartItemNumber})</NavLink>
                </li>
            </ul>
        </nav>
    </header>
);
