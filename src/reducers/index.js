import { combineReducers } from 'redux'
// import loading from './loading'
import { loadingBarReducer as loading} from 'react-redux-loading-bar'
import form from './form'
import user from './user'
import vacancies from './vacancies'
import visibilityFilter from './visibilityFilter'



export default combineReducers({
    user,
    vacancies,
    visibilityFilter,
    form,
    loading
})