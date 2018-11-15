import { ADD_VACANCY, UPDATE_VACANCY, DELETE_VACANCY } from '../actions/vacancies';

export default (state = [], action) => {
    switch (action.type) {
        case ADD_VACANCY:
            return state.concat(action.data);
        case UPDATE_VACANCY:
            return state.filter((vacancy) => vacancy.id !== action.data.id).concat(action.data)
        case DELETE_VACANCY:
            return
        default:
            return state;
    }
}