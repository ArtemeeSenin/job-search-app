import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux'
import { reducer as formReducer } from 'redux-form'
import { createLogger } from 'redux-logger'
import './index.scss'
import App from './App';

const logger = createLogger({
    collapsed: true
});

function vacancies (state = {}, action) {
    switch (action.type) {
        case 'ADD_VACANCY':
            return state.concat([action.data])
        default:
            return state;
    }
}
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
const reducers = {
    form: formReducer.plugin({
        vacancy: (state, action) => {
            switch(action.type){
                case 'FILL_IN_FORM':
                    return {
                        ...state,
                        values: {
                            ...state.values,
                            ...action.data
                        }
                    }
                default:
                    return state;
            }
        }
    }),
    vacancies
}

let store = createStore(
    combineReducers(reducers),
    initialState,
    composeWithDevTools(applyMiddleware(logger))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);

// store.dispatch({ type: 'FILL_IN_FORM', data: initialState.vacancies[0] })