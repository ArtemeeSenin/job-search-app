import React from 'react'
import RatingFilters from './containers/RatingFilters';
import RatingTable from './containers/RatingTable';

const Rating = () => (
    <div className="rating">
        <RatingFilters />
        <RatingTable />
    </div>
)

export default Rating;