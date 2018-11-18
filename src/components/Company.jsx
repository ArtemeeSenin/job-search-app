import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CompanyCard from './containers/CompanyCard'
import NotFound from './containers/NotFound'

const Vacancy = () => (
    <Switch>
        <Route path="/account/company/:id" component={ CompanyCard } />
        <Route path="*" component={ NotFound }/>
    </Switch>
)
export default Vacancy;
