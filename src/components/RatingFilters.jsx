import React from 'react';

const RatingFilters = (props) => {
    return (
        <div className="rating-filters">
            <form className="rating-filters__form" action="" method="GET">
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
                        <li className="rating-filters__dropdown-list-item">
                            <label className="rating-filters__filter rating-filters__filter--candidate">
                                <input type="checkbox" className="rating-filters__checkbox" />
                                <i className="rating-filters__filter-icon fal"></i>
                                <span>Candidate</span>
                            </label>
                        </li>
                        <li className="rating-filters__dropdown-list-item">
                            <label className="rating-filters__filter rating-filters__filter--offer">
                                <input type="checkbox" className="rating-filters__checkbox" />
                                <i className="rating-filters__filter-icon fal"></i>
                                <span>Offer</span>
                            </label>
                        </li>
                        <li className="rating-filters__dropdown-list-item">
                            <label className="rating-filters__filter rating-filters__filter--declined">
                                <input type="checkbox" className="rating-filters__checkbox" />
                                <i className="rating-filters__filter-icon fal"></i>
                                <span>Declined</span>
                            </label>
                        </li>
                        <li className="rating-filters__dropdown-list-item">
                            <label className="rating-filters__filter rating-filters__filter--not-suitable">
                                <input type="checkbox" className="rating-filters__checkbox" />
                                <i className="rating-filters__filter-icon fal"></i>
                                <span>Not suitable</span>
                            </label>
                        </li>
                    </ul>
                </div>
                <button className="rating-filters__filter-button button button--ghost" type="submit">Filter</button>
            </form>
        </div>
    )
}

export default RatingFilters;