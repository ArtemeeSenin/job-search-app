// import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const ADD_VACANCY = 'ADD_VCANCY';
export const UPDATE_VACANCY = 'UPDATE_VACANCY';
export const DELETE_VACANCY = 'DELETE_VACANCY'

function generateUID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function addVacancy(data){
    data.id = generateUID();
    // data.companyDescription = '';
    // data.companyCommentary = '';
    data.workDay = data.workDay * 60;

    return {
        type: ADD_VACANCY,
        data
    }
}

export function updateVacancy(data){
    data.workDay = data.workDay * 60;
    return {
        type: UPDATE_VACANCY,
        data
    }
}

export function deleteVacancy(id){
    return {
        type: DELETE_VACANCY,
        id
    }
}