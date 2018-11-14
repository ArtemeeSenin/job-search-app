import React from 'react';
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { Field } from 'redux-form'
import { FilterCheckbox } from '../fields'


const RatingFilters = (props) => {
    const { handleSubmit } = props;
    const onSubmit = (values) => {
        console.log(values);
    }

    return (
        <div className="rating-filters">
            <form onSubmit={handleSubmit(onSubmit)} className="rating-filters__form" noValidate>
                <div className="rating-filters__search">
                    <div className="rating-filters__search-line">
                        <input type="text" className="rating-filters__search-line-input" placeholder="Start search"
                            onFocus={() => { document.querySelector('.rating-filters__search').classList.add('rating-filters__search--is-active'); }}
                        />
                        <i className="fal fa-search"></i>
                    </div>
                    <ul className="rating-filters__dropdown-list rating-filters__dropdown-list--floating">
                        <li className="rating-filters__dropdown-list-item">Secret testing engineer</li>
                    </ul>
                </div>
                <div className="rating-filters__statuses">
                    <p className="rating-filters__statuses-text" onClick={() => { document.querySelector('.rating-filters__statuses').classList.toggle('rating-filters__statuses--is-active'); }}>
                        Status
                        <i className="fal fa-chevron-down"></i>
                    </p>
                    <ul className="rating-filters__dropdown-list">
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
                    </ul>
                </div>
                <button className="rating-filters__filter-button button button--ghost" type="submit">Filter</button>
            </form>
        </div>
    )
}

export default connect()(reduxForm({
    form: 'filters'
})(RatingFilters));