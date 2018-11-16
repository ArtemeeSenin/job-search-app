import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import cx from 'classnames'
// import PrivateRoute from './components/containers/PrivateRoute'
import NavMenu from './components/containers/NavMenu'
import SignIn from './components/containers/SignIn'
import Logout from './components/containers/Logout'
import SignUp from './components/containers/SignUp'
import ResetPassword from './components/containers/ResetPassword'
import Rating from './components/Rating'
import Vacancy from './components/Vacancy'
import Company from './components/Company'

class App extends Component {
  constructor() {
    super();
    this.state = {
      // user: 'Artem'
    }
  }
  login = (user) => {
    // localStorage.setItem('user', JSON.stringify(user));
    this.setState({ user }, () => this.props.history.push('/account/rating'))
  }
  logout = () => {
    this.setState({ user: null }, () => this.props.history.push('/sign-in'))
  }
  render() {
    console.log(this.props)
    return (
      <Fragment>
          <NavMenu />
          <main className={cx(
            'page-content'
          )}>
            <div className={cx(
              'container'
            )}>
              <Switch>
                <Route exact path="/" component={ Rating } />
                <Route path="/sign-in" render={props => <SignIn onLogin={ this.login } />} />
                <Route path="/logout" render={props => <Logout onLogout={ this.logout } />} />
                <Route path="/sign-up" component={ SignUp } />
                <Route path="/reset-password" component={ ResetPassword } />
                <Route path="/rating" component={ Rating } />
                <Route path="/vacancy" component={ Vacancy } />
                <Route path="/company" component={ Company } />
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