import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PrivateRoute from './components/containers/PrivateRoute'
import NavMenu from './components/containers/NavMenu'
import SignIn from './components/containers/SignIn'
import Logout from './components/containers/Logout'
import SignUp from './components/containers/SignUp'
import ResetPassword from './components/containers/ResetPassword'
import Rating from './components/Rating'
import VacancyCard from './components/VacancyCard'
import VacancyEdit from './components/VacancyEdit'


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
  }
  login = (user) => {
    this.setState({ user }, () => this.props.history.push('/rating'))
  }
  logout = () => {
    this.setState({ user: null }, () => this.props.history.push('/sign-in'))
  }
  render() {
    return (
      <Fragment>
          <NavMenu />
          <main className="page-content">
            <div className="container">
              <Switch>
                <PrivateRoute exact path="/" component={Rating} />
                <Route path="/login" render={props => <SignIn onLogin={this.login} />} />
                <Route path="/logout" render={props => <Logout onLogout={this.logout} />} />
              </Switch>
            </div>
          </main>
      </Fragment>
    );
  }
}

export default withRouter(App);