import { SET_VISIBILITY_FILTER_STATUS, SET_VISIBILITY_FILTER_TEXT } from '../actions/visibilityFilter'
const initialState = {
        text: '',
        status: []
    };
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER_STATUS:
            return {
                ...state,
                "status": action.statuses
            };
        case SET_VISIBILITY_FILTER_TEXT:
            return {
                ...state,
                "text": action.text
            }
        default:
            return state;
    }
}