import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Products, Cart } from './pages';
import './app.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Products} exact />
                    <Route path="/cart" component={Cart} exact />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
