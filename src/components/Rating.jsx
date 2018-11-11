import React from 'react'
import RatingFilters from './RatingFilters';
import RatingTable from './RatingTable';

const Rating = () => (
    <div className="rating">
        <RatingFilters />
        <RatingTable />
    </div>
)

export default Rating;