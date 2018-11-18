import { ADD_VACANCY, UPDATE_VACANCY, DELETE_VACANCY, RECEIVE_VACANCIES, RESET_STORE_VACANCIES } from '../actions/vacancies';

export default (state = [], action) => {
    console.log('new action', action.data)
    switch (action.type) {
        case ADD_VACANCY:
            return state.concat(action.data);
        case UPDATE_VACANCY:
            return state.filter((vacancy) => vacancy.id !== action.data.id).concat(action.data)
        case DELETE_VACANCY:
            return state.filter((vacancy) => vacancy.id !== action.id)
        case RECEIVE_VACANCIES:
            return state.concat(action.data);
        case RESET_STORE_VACANCIES:
            return state = []
        default:
            return state;
    }
}