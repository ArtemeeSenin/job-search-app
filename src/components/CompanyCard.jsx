import React from 'react'
import CardHeader from './containers/CardHeader'
import CardContent from './containers/CardContent'
import CardFooter from './containers/CardFooter'

const data = {
    name: "Epic Company",
    description: "Strategic division one of the leaders in the field of information and telecommunications services in the B2B segment. The greatest expertise T-Systems is in industries such as automotive, energy, transportation, oil and gas. ",
    commentary: "Good company"
}
const links = [
    {
        text: "See rating",
        path: '/rating'
    },
    {
        text: "Edit",
        path: '/edit'
    }
]

const VacancyCard = () => (
    <article className="card-info">
        <CardHeader data={{ name: data.name }} />
        <CardContent />
        <CardFooter links={links} />
    </article>
)

export default VacancyCard;