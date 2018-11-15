import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux'
import reducer from './reducers'
import middleware from './middleware'
import { Provider } from 'react-redux'
import * as firebase from 'firebase'
import './index.scss'
import App from './App';
import initialState from './index.json';

const config = {
    apiKey: "AIzaSyAW9Yb7OPY8bB-fMi4-x2YYN7JEfeiraSQ",
    authDomain: "job-search-app-f7fa1.firebaseapp.com",
    databaseURL: "https://job-search-app-f7fa1.firebaseio.com",
    projectId: "job-search-app-f7fa1",
    storageBucket: "job-search-app-f7fa1.appspot.com",
    messagingSenderId: "794082995107"
}

firebase.initializeApp(config);

let store = createStore(reducer, initialState, middleware);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root')
);