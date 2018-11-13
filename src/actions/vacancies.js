// import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const ADD_VACANCY = 'ADD_VCANCY';

function generateUID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function addVacancy(data){
    data.id = generateUID();
    data.companyDescription = '';
    data.companyCommentary = '';

    return {
        type: ADD_VACANCY,
        data
    }
}