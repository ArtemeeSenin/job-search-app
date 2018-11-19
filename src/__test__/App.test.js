import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import { createStore } from 'redux'
import reducer from '../reducers'
import middleware from '../middleware'
import { Provider } from 'react-redux'

let store = createStore(reducer, middleware);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, div);
});