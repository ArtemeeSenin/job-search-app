// import { showLoading, hideLoading } from 'react-redux-loading-bar'
import firebase from '../firebase'
const db = firebase.firestore();
export const ADD_VACANCY = 'ADD_VCANCY';
export const UPDATE_VACANCY = 'UPDATE_VACANCY';
export const DELETE_VACANCY = 'DELETE_VACANCY'
export const RECEIVE_VACANCIES = 'RECEIVE_VACANCIES';

// export function addVacancy(data){
//     data.id = generateUID();
//     data.workDay = data.workDay * 60;

//     return {
//         type: ADD_VACANCY,
//         data
//     }
// }
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
                console.log('Added vacancy to db', res)
                dispatch(addVacancyAction(data, res.id))
            })
            .catch( (err) => {
                console.log(err)
            })
    }

}

// export function updateVacancy(data){
//     data.workDay = data.workDay * 60;
//     return {
//         type: UPDATE_VACANCY,
//         data
//     }
// }
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
                console.log(res)
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
                console.log(res)
                dispatch(deleteVacancyAction(id))
            })
            .catch((err) => {
                console.log(err)
            })
    }

}

export function addVacancies(data) {
    console.log('set vacancies')
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
                console.log(querySnapshot)
                querySnapshot.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc, doc.data());
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

// .add({
//             name: "Tokyo",
//             country: "Japan"
//         })
//         .then(function(docRef) {
//             console.log("Document written with ID: ", docRef.id);
//             dispatch(getVacancies())
//         })
//         .catch(function(error) {
//             console.error("Error adding document: ", error);
//         });