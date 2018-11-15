export const SET_VISIBILITY_FILTER_STATUS = 'SET_VISIBILITY_FILTER_STATUS';
export const SET_VISIBILITY_FILTER_TEXT = 'SET_VISIBILITY_FILTER_TEXT';

export const setVisibilityFilterStatus = (statuses = {}) => {
    console.log(statuses)
    return {
        type: SET_VISIBILITY_FILTER_STATUS,
        statuses: Object.keys(statuses).filter( k => statuses[k] )
    }
}

export const setVisibilityFilterText = (text = '') => {
    console.log(text)
    return {
        type: SET_VISIBILITY_FILTER_TEXT,
        text: text
    }
}