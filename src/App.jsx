import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import cx from 'classnames'
// import PrivateRoute from './components/containers/PrivateRoute'
import NavMenu from './components/containers/NavMenu'
import SignIn from './components/containers/SignIn'
import Logout from './components/containers/Logout'
import SignUp from './components/containers/SignUp'
import ResetPassword from './components/containers/ResetPassword'
import Account from './components/Account'

class App extends Component {
  constructor() {
    super();
    this.state = {
      // user: 'Artem'
    }
  }
  login = (user) => {
    // localStorage.setItem('user', JSON.stringify(user));
    // () => this.props.history.push('/account/rating')
  }
  logout = () => {
    // this.setState({ user: null }, () => this.props.history.push('/sign-in'))
  }
  render() {
    const locationPath = this.props.location.pathname;
    console.log(locationPath)
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
                <Route path="/sign-up" component={ SignUp } />
                <Route path="/reset-password" component={ ResetPassword } />
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

export default withRouter(App);