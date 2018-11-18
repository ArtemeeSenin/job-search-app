import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CardHeader from './CardHeader'
import CardContent from './CompanyCardContent'

class CompanyCard extends Component {
    render() {
        const data =  this.props.vacancy
        if(!data) return (<h2 style={{textAlign: 'center'}}>Loading..</h2>);

        return (
            <article className="card-info">
                <CardHeader data={{ pageName: data.company }} />
                <CardContent data={data} />
                <footer className="card-info__footer">
                    <div className="card-info__footer-buttons-container">
                        <Link className="button" to='/account/rating'>See rating</Link>
                        <Link className="button" to={`/account/vacancy/edit/${data.id}`}>Edit</Link>
                        <Link className="button" to={`/account/vacancy/${data.id}`}>See Vacancy</Link>
                    </div>
                </footer>
            </article>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const { vacancies, dispatch } = state;
    const vacancy = vacancies.filter((vacancy) => { return vacancy.id === ownProps.match.params.id })[0];
    return {
        vacancy,
        dispatch
    };
}

export default connect(mapStateToProps)(CompanyCard);