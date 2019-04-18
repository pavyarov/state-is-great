import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Products, Cart } from './pages';
import './app.css';

export const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Products} exact />
            <Route path="/cart" component={Cart} exact />
        </Switch>
    </BrowserRouter>
);
