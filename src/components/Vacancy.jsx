import React from 'react'
import { Switch, Route } from 'react-router-dom'
import VacancyCard from './containers/VacancyCard'
import VacancyEdit from './containers/VacancyEdit'

const Vacancy = () => (
    <Switch>
        <Route path="/account/vacancy/add" component={ VacancyEdit } />
        <Route path="/account/vacancy/edit/:id" component={ VacancyEdit } />
        <Route path="/account/vacancy/delete/:id" component={ VacancyCard } />
        <Route path="/account/vacancy/:id" component={ VacancyCard } />
    </Switch>
)
export default Vacancy;
