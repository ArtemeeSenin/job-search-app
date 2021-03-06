import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux'
import reducer from './reducers'
import middleware from './middleware'
import { Provider } from 'react-redux'
import './index.scss'
import App from './App';

let store = createStore(reducer, middleware);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root')
);