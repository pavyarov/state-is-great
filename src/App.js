import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Products, Cart } from './pages';
import { GlobalState } from './context';
import './app.css';

export const App = () => (
    <GlobalState>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Products} exact />
                <Route path="/cart" component={Cart} exact />
            </Switch>
        </BrowserRouter>
    </GlobalState>
);
