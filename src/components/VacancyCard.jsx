import React from 'react'
import CardHeader from './containers/CardHeader'
import CardContent from './containers/CardContent'
import CardFooter from './containers/CardFooter'

const data = {
    position: "Senior front-end developer",
    company: "Epic Company",
    salaryNumber: "220 000",
    salaryCurrency: "₽",
    status: "Offer",
    workingDay: "8 h.",
    inTheWay: "1 h. 20 min.",
    additionalStudying: true,
    interesting: "smile",
    comment: "Frontend developer at Quby you will work primarily on our hybrid mobile application which is targeted at our energy utility’s end users. Frontend developer at Quby you will work primarily on our hybrid mobile application which is targeted at our energy utility’s end users."
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
        <CardHeader data={{name: data.position, company: data.company}}/>
        <CardContent />
        <CardFooter links={ links }/>
    </article>
)

export default VacancyCard;