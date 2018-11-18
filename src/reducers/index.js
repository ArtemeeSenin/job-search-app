import { combineReducers } from 'redux'
import { loadingBarReducer as loading} from 'react-redux-loading-bar'
import user from './user'
import vacancies from './vacancies'
import visibilityFilter from './visibilityFilter'
import { reducer as formReducer } from 'redux-form'



export default combineReducers({
    user,
    vacancies,
    visibilityFilter,
    form: formReducer,
    loading
})