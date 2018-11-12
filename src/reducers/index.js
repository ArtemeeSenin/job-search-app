import { combineReducers } from 'redux'
// import loading from './loading'
import { loadingBarReducer } from 'react-redux-loading-bar'
import form from './form'
import user from './user'
import companies from './companies'
import vacancies from './vacancies'
import visibilityFilter from './visibilityFilter'



export default combineReducers({
    user,
    companies,
    vacancies,
    visibilityFilter,
    form,
    loadingBarReducer
})