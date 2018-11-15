import React, { Component } from 'react';
import { connect } from 'react-redux'
import { reduxForm, change } from 'redux-form'
import { Field, FormSection } from 'redux-form'
import cx from 'classnames'
import { FilterCheckbox } from '../fields'
import { setVisibilityFilterStatus, setVisibilityFilterText } from '../../actions/visibilityFilter'


class RatingFilters extends Component {
    constructor(props){
        super(props);
        this.state = {
            ...props.data,
            statusFilterOpened: true,
            textFilterOpened: false
        }
    }
    useSuggestion(suggestion) {
        this.props.dispatch(change('filters', 'textFilter', suggestion))
    }
    render() {
        const { handleSubmit, dispatch } = this.props;
        const onSubmit = (values) => {
            dispatch(setVisibilityFilterStatus(values.status));
            dispatch(setVisibilityFilterText(values.textFilter));
        }
        const postions = this.state.vacancies.map((vacancy) => vacancy.position).sort();
        const companies = this.state.vacancies.map((vacancy) => vacancy.company).sort();
        const vacanciesSuggestionSet = new Set([...postions, ...companies])
        let vacanciesSuggestion = [];
        vacanciesSuggestionSet.forEach( (el) => vacanciesSuggestion.push(el))
        console.log(vacanciesSuggestion)

        return (
            <div className="rating-filters">
                <form onSubmit={handleSubmit(onSubmit)} className="rating-filters__form" autoComplete="off" noValidate>
                        <Field
                            name="textFilter"
                            component={ props => {
                                const { input, meta } = props;

                                return (
                                    <div className={cx(
                                            'rating-filters__search',
                                            {'rating-filters__search--is-active': meta.active && meta.dirty}
                                    )}>
                                        <div className="rating-filters__search-line">
                                            <input
                                                {...input}
                                                type="text"
                                                className="rating-filters__search-line-input"
                                                placeholder="Start search"
                                            />
                                            <i className="fal fa-search"></i>
                                        </div>
                                        <ul className="rating-filters__dropdown-list rating-filters__dropdown-list--floating">
                                                { vacanciesSuggestion
                                                    .filter( (vacancy) => { return vacancy.toLowerCase().includes(input.value)})
                                                    .map( (vacancy, id) =>
                                                        <li
                                                            key={id}
                                                            className="rating-filters__dropdown-list-item rating-filters__filter"
                                                            onClick={() => this.useSuggestion(vacancy)  }
                                                        >{vacancy}</li>
                                                    )
                                                }
                                        </ul>
                                    </div>
                                )
                            }}
                        />

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

export default connect()(reduxForm({
    form: 'filters'
})(RatingFilters));