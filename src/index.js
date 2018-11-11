import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux'
import { reducer as formReducer } from 'redux-form'
import logger from 'redux-logger'
import './index.scss'
import App from './App';

const reducers = {
    form: formReducer
}

let store = createStore(
    combineReducers(reducers),
    composeWithDevTools(applyMiddleware(logger))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);