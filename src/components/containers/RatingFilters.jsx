import React, { Component } from 'react';
import { connect } from 'react-redux'
import { reduxForm, change } from 'redux-form'
import { Field, FormSection } from 'redux-form'
import cx from 'classnames'
import { FilterCheckbox, Search } from '../fields'
import { setVisibilityFilterStatus, setVisibilityFilterText } from '../../actions/visibilityFilter'


class RatingFilters extends Component {
    constructor(props){
        super(props);
        this.state = {
            ...props,
            statusFilterOpened: true,
            textFilterOpened: false,
            handleSubmit: props.handleSubmit,
            searchValue: ''
        }
    }
    useSuggestion(suggestion) {
        this.props.dispatch(change('filters', 'textFilter', suggestion))
        this.setState({ searchValue: '', textFilterOpened: false })
    }
    onSubmit = (values) => {
        this.props.dispatch(setVisibilityFilterStatus(values.status));
        this.props.dispatch(setVisibilityFilterText(values.textFilter));
    }
    render() {
        let vacanciesSuggestion = [], vacanciesSuggestionSet = new Set([...this.props.positions, ...this.props.companies]);
        vacanciesSuggestionSet.forEach( (el) => vacanciesSuggestion.push(el))
        // TODO: console.log(this.props.companies, this.state.companies, vacanciesSuggestion, vacanciesSuggestionSet)

        return (
            <div className="rating-filters">
                <form onSubmit={this.state.handleSubmit(this.onSubmit)} className="rating-filters__form" autoComplete="off" noValidate>
                    <div className={ cx(
                        'rating-filters__search',
                        { 'rating-filters__search--is-active': this.state.searchValue }
                    )}>
                        <div className="rating-filters__search-line">
                            <Field
                                name="textFilter"
                                component={ Search }
                                onChange={(e, value) => {
                                    this.setState({ searchValue: value, textFilterOpened: true})
                                }}
                            />
                            <i className="fal fa-search"></i>
                        </div>
                        <ul className="rating-filters__dropdown-list rating-filters__dropdown-list--floating">
                            { this.state.textFilterOpened
                            ? vacanciesSuggestion
                                .filter( (vacancy) => { return vacancy.toLowerCase().includes(this.state.searchValue.toLowerCase())})
                                .map( (vacancy) =>
                                    <li
                                        key={vacancy}
                                        className="rating-filters__dropdown-list-item rating-filters__filter"
                                        onClick={() => this.useSuggestion(vacancy)  }
                                    >{vacancy}</li>
                                )
                            : null
                            }
                        </ul>
                    </div>

                    <div className={cx(
                        'rating-filters__statuses',
                        {'rating-filters__statuses--is-active': this.state.statusFilterOpened}
                    )}>
                        <p className="rating-filters__statuses-text" onClick={() => this.setState({statusFilterOpened: !this.state.statusFilterOpened})}>
                            Status
                            <i className="fal fa-chevron-down"></i>
                        </p>
                        <ul className="rating-filters__dropdown-list">
                        <FormSection name="status">
                            <Field
                                name="offer"
                                type="checkbox"
                                component={FilterCheckbox}
                                modifier="offer"
                                label="Offer"
                            />
                            <Field
                                name="candidate"
                                type="checkbox"
                                component={FilterCheckbox}
                                modifier="candidate"
                                label="Candidate"
                            />
                            <Field
                                name="not suitable"
                                type="checkbox"
                                component={FilterCheckbox}
                                modifier="not-suitable"
                                label="Not suitable"
                            />
                            <Field
                                name="declined"
                                type="checkbox"
                                component={FilterCheckbox}
                                modifier="declined"
                                label="Declined"
                            />
                        </FormSection>
                        </ul>
                    </div>
                    <button className="rating-filters__filter-button button button--ghost" type="submit">Filter</button>
                </form>
            </div>
        )
    }
}
function mapStateToProps(state){
    console.log('STATE', state)
    if(state.vacancies.length)
        return {
            positions: state.vacancies.map((vacancy) => vacancy.position).sort(),
            companies: state.vacancies.map((vacancy) => vacancy.company).sort()
        }
    else {
        return {
            positions: [],
            companies: []
        }
    }
}
export default connect(mapStateToProps)(reduxForm({
    form: 'filters',
    destroyOnUnmount: false
})(RatingFilters));