// import { showLoading, hideLoading } from 'react-redux-loading-bar'
import firebase from '../firebase'
const db = firebase.firestore();
export const ADD_VACANCY = 'ADD_VCANCY';
export const UPDATE_VACANCY = 'UPDATE_VACANCY';
export const DELETE_VACANCY = 'DELETE_VACANCY'
export const RECEIVE_VACANCIES = 'RECEIVE_VACANCIES';
export const RESET_STORE_VACANCIES = 'RESET_STORE_VACANCIES'

export function resetStoreVacancies(){
    return {
        type: RESET_STORE_VACANCIES
    }
}
function addVacancyAction(data, id){
    return {
        type: ADD_VACANCY,
        data,
        id
    }
}

export function addVacancy(data){
    data.workDay = data.workDay * 60;

    return (dispatch) => {
        db.collection('vacancies').add({
                ...data,
                author: JSON.parse(localStorage.getItem('user')),
                createdAt: new Date()
            })
            .then( (res) => {
                dispatch(addVacancyAction(data, res.id))
            })
            .catch( (err) => {
                console.log(err)
            })
    }

}

function updateVacancyAction(data){
    return {
        type: UPDATE_VACANCY,
        data
    }
}

export function updateVacancy(data){
    data.workDay = data.workDay * 60;

    return (dispatch) => {
        db.collection('vacancies').doc(data.id).update({
            ...data
        })
            .then((res) => {
                dispatch({
                    type: UPDATE_VACANCY,
                    data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

}

function deleteVacancyAction(id){
    return {
        type: DELETE_VACANCY,
        id
    }
}

export function deleteVacancy(id){
    return (dispatch) => {
        db.collection('vacancies').doc(id).delete()
            .then((res) => {
                dispatch(deleteVacancyAction(id))
            })
            .catch((err) => {
                console.log(err)
            })
    }

}

export function addVacancies(data) {
    return {
        type: RECEIVE_VACANCIES,
        data

    }
}

export function receiveVacancies(){
    console.log('start receiving for ', localStorage.getItem('user'))
    return (dispatch) => {
        db.collection('vacancies').where("author", "==", JSON.parse(localStorage.getItem('user')))
            .get()
            .then(function(querySnapshot) {
                let data = [];
                querySnapshot.forEach(function(doc) {
                    data.push({
                        ...doc.data(),
                        id: doc.id
                    })
                });
                dispatch(addVacancies(data))
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
    }
}
