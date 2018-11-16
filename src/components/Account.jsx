import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Rating from './Rating'
import Vacancy from './Vacancy'
import Company from './Company'

const Account = () => (
    <Switch>
        <Route path="/" exact render={ props => <Redirect to="/account/rating" /> } />
        <Route path="/account/rating" component={Rating} />
        <Route path="/account/vacancy" component={Vacancy} />
        <Route path="/account/company" component={Company} />
    </Switch>
)

export default Account;