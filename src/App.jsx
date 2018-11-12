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
      user: 'Artem'
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
                <PrivateRoute exact path="/" component={ Rating } />
                <Route path="/sign-in" render={props => <SignIn onLogin={ this.login } />} />
                <Route path="/logout" render={props => <Logout onLogout={ this.logout } />} />
                <Route path="/sign-up" component={ SignUp } />
                <Route path="/reset-password" component={ ResetPassword } />
                <PrivateRoute path="/rating" component={ Rating } />
                <PrivateRoute path="/vacancy/:id" component={ VacancyCard } />
                <PrivateRoute path="/vacancy/add" component={ VacancyEdit } />
                <PrivateRoute path="/vacancy/edit/:id" component={ VacancyEdit } />
                {/* <PrivateRoute path="/company/:id" component={ CompanyCard } />
                <PrivateRoute path="/company/edit/:id" component={ CompanyEdit } /> */}
                <Route render={props => <SignIn onLogin={ this.login } />} />
              </Switch>
            </div>
          </main>
      </Fragment>
    );
  }
}

export default withRouter(App);