import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { reducer as formReducer } from 'redux-form'
import './index.scss'
import App from './App';

const reducers = {
    form: formReducer
}

let store = createStore(
    combineReducers(reducers)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);