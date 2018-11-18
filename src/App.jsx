import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import cx from 'classnames'
import PrivateRoute from './components/containers/PrivateRoute'
import NavMenu from './components/containers/NavMenu'
import SignIn from './components/containers/SignIn'
import Logout from './components/containers/Logout'
import SignUp from './components/containers/SignUp'
import ResetPassword from './components/containers/ResetPassword'
import Account from './components/Account'
import NotFound from './components/containers/NotFound'
import firebase from './firebase'

class App extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this)
    this.signup = this.signup.bind(this)
    this.logout = this.logout.bind(this)
    this.resetPassword = this.resetPassword.bind(this)
    this.authListener = this.authListener.bind(this)
  }
  login = (e) => {
    console.log('login', e)
    firebase.auth().signInWithEmailAndPassword(e.login, e.password)
      .then( (user) => {
        console.log('authed as ', user.user.email)
        // this.props.dispatch()
        localStorage.setItem('user', JSON.stringify(user.user.email))
        // console.log(localStorage.getItem('user'))
      })
      .then( () => this.props.history.push('/account/rating'))
      .catch( (err) => console.log(err))
  }
  signup = (e) => {
    console.log('signup', e)
    firebase.auth().createUserWithEmailAndPassword(e.login, e.password)
      .then( (user) => {
        console.log(user.user.email)
        localStorage.setItem('user', JSON.stringify(user.user.email))
        // console.log(localStorage.getItem('user'))
      })
      .then( () => this.props.history.push('/account/rating'))
      .catch( (err) => console.log(err))
  }
  logout = (e) => {
    firebase.auth().signOut()
      .then( () => {
        localStorage.removeItem('user')
        this.props.history.push('/sign-in')
      })
  }
  authListener = (e) => {
    firebase.auth().onAuthStateChanged( (user) => {
      console.log('auth changed', user)
    })
  }
  resetPassword = (e) => {
    console.log('reset password', e)
    firebase.auth().sendPasswordResetEmail(e.login)
      .then((e) => {
        console.log('Email sent.', e)
        localStorage.removeItem('user')
      }).catch((err) => {
        console.log(err)
      });
    return 'Now you can sign in'
  }
  componentDidMount() {
    console.log('Initialize App')
    this.authListener();
  }
  render() {
    const locationPath = this.props.location.pathname;
    return (
      <Fragment>
        { locationPath.includes('account') ? <NavMenu /> : null}
          <main className={cx(
            'page-content',
          { 'page-content--background': !locationPath.includes('account') && !locationPath.includes('not-found')},
          // { 'page-content--bg-variation-light': locationPath.includes('sign-in')},
          { 'page-content--vertical-fields': !locationPath.includes('account') && !locationPath.includes('not-found')}
          )}>
            <div className={cx(
              'container',
            { 'container--vertical-padding': !locationPath.includes('account') && !locationPath.includes('not-found') }
            )}>
              <Switch>
                <PrivateRoute exact path="/" component={ Account } />
                <Route path="/sign-in" render={props => <SignIn onLogin={ this.login } />} />
                <Route path="/logout" render={props => <Logout onLogout={ this.logout } />} />
                <Route path="/sign-up" render={props => <SignUp onLogin={this.signup} /> } />
                <Route path="/reset-password" render={ props => <ResetPassword onResetPassword={this.resetPassword} />} />
                <PrivateRoute path="/account" component={ Account } />
                <Route path="/not-found" component={ NotFound }/>
                <Route path="*" component={ NotFound }/>
              </Switch>
            </div>
          </main>
      </Fragment>
    );
  }
}

function mapStateToProps(state){
  return {
    ...state
  }
}
function mapDispatchToProps(dispatch){
  return {
    dispatch
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));