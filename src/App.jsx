import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import cx from 'classnames'
// import PrivateRoute from './components/containers/PrivateRoute'
import NavMenu from './components/containers/NavMenu'
import SignIn from './components/containers/SignIn'
import Logout from './components/containers/Logout'
import SignUp from './components/containers/SignUp'
import ResetPassword from './components/containers/ResetPassword'
import Account from './components/Account'
import firebase from './firebase'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.login = this.login.bind(this)
    this.signup = this.signup.bind(this)
    this.logout = this.logout.bind(this)
    this.resetPassword = this.resetPassword.bind(this)
    this.authListener = this.authListener.bind(this)
  }
  login = (e) => {
    console.log('login', e)
    firebase.auth().signInWithEmailAndPassword(e.login, e.password)
      .then( (user) => console.log('authed as ', user))
      .then( () => this.props.history.push('/account/rating'))
      .catch( (err) => console.log(err))
  }
  signup = (e) => {
    console.log('signup', e)
    firebase.auth().createUserWithEmailAndPassword(e.login, e.password)
      .then( (user) => console.log(user))
      .then( () => this.props.history.push('/account/rating'))
      .catch( (err) => console.log(err))
  }
  logout = (e) => {
    firebase.auth().signOut()
      .then( () => this.props.history.push('/sign-in'))
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
          { 'page-content--background': !locationPath.includes('account')},
          // { 'page-content--bg-variation-light': locationPath.includes('sign-in')},
          { 'page-content--vertical-fields': !locationPath.includes('account')}
          )}>
            <div className={cx(
              'container',
            { 'container--vertical-padding': !locationPath.includes('account') }
            )}>
              <Switch>
                <Route exact path="/" component={ Account } />
                <Route path="/sign-in" render={props => <SignIn onLogin={ this.login } />} />
                <Route path="/logout" render={props => <Logout onLogout={ this.logout } />} />
                <Route path="/sign-up" render={props => <SignUp onLogin={this.signup} /> } />
                <Route path="/reset-password" render={ props => <ResetPassword onResetPassword={this.resetPassword} />} />
                <Route path="/account" component={ Account } />
                <Route path="*" children={<div>Not Found</div>}
                />
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