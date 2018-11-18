import firebase from './../../firebase'
const auth = firebase.auth;

export const required = value =>
    value ? undefined : 'Value is required'

export const requiredRadio = (value, allValues) => {
    return allValues.status ? undefined : 'Value is required'
}

export const matchesPassword = (value, allValues) =>
    value === allValues.password
        ? undefined
        : 'Passwords must match'

export const strongPassword = (value) =>
    value.length >= 6
        ? undefined
        : 'Password must be at least 6 characters'

export const isEmail = value => {
    const regEmail = /^\S+@\S+\.\S+$/i;
    return regEmail.test(value) ? undefined : 'Not a valid email';
}

export const asyncValidateSignUp = values => {

    return auth().fetchSignInMethodsForEmail(values.login)
        .then( (res) => {
            if(res.length) throw { login: 'Wrong credentials' }
        })
    }

export const asyncValidateSignIn = values => {
    return auth().signInWithEmailAndPassword(values.login, values.password)
      .then( (user) => {
            localStorage.setItem('user', JSON.stringify(values.login))
            localStorage.getItem('user')
      })
      .catch((err)=> {
          console.log('error')
          throw { password: 'Wrong login or password' }
      })
}

// firebase.auth().signInWithEmailAndPassword(e.login, e.password)
//       .then( (user) => {
//         console.log('authed as ', user.user.email)
//         // this.props.dispatch()
//         localStorage.setItem('user', JSON.stringify(user.user.email))
//         // console.log(localStorage.getItem('user'))
//       })
//       .then( () => this.props.history.push('/account/rating'))
//       .catch( (err) => console.log(err))