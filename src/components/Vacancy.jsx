import React from 'react'
import { Switch, Route } from 'react-router-dom'
import VacancyCard from './containers/VacancyCard'
import VacancyEdit from './containers/VacancyEdit'

const Vacancy = () => (
    <Switch>
        <Route path="/vacancy/add" component={ VacancyEdit } />
        <Route path="/vacancy/edit/:id" component={ VacancyEdit } />
        <Route path="/vacancy/delete/:id" component={ VacancyCard } />
        <Route path="/vacancy/:id" component={ VacancyCard } />
    </Switch>
)
export default Vacancy;
