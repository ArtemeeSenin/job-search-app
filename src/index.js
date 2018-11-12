import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux'
import reducer from './reducers'
import middleware from './middleware'
import { Provider } from 'react-redux'
import './index.scss'
import App from './App';


const initialState = {
    form: {},
    vacancies: [
        {
            position: 'Senior front-end developer',
            company: 'Epic Company',
            companyId: 0,
            salary: 100000,
            status: 'offer',
            workDay: 480,
            inTheWay: 40,
            isInteresting: true,
            requiresAdditionalStudying: true,
            description: 'World wide company',
            commentary: 'This is a good company'
        }
    ]
};

let store = createStore(reducer, middleware);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root')
);

// store.dispatch({ type: 'FILL_IN_FORM', data: initialState.vacancies[0] })