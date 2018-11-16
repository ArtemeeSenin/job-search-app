import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CompanyCard from './containers/CompanyCard'

const Vacancy = () => (
    <Switch>
        <Route path="/account/company/:id" component={ CompanyCard } />
    </Switch>
)
export default Vacancy;
