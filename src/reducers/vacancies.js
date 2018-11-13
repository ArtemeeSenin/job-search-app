import { ADD_VACANCY } from '../actions/vacancies';

export default (state = [], action) => {
    switch (action.type) {
        case ADD_VACANCY:
            return state.concat(action.data);
        default:
            return state;
    }
}