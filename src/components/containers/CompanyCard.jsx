import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CardHeader from './CardHeader'
import CardContent from './CompanyCardContent'

class CompanyCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vacancy: props.vacancies.filter((vacancy) => { return vacancy.id === props.match.params.id })[0]
        }
    }
    render() {
        const data = this.state.vacancy;
        return (
            <article className="card-info">
                <CardHeader data={{ pageName: data.company }} />
                <CardContent data={data} />
                <footer className="card-info__footer">
                    <div className="card-info__footer-buttons-container">
                        <Link className="button" to='/rating'>See rating</Link>
                        <Link className="button" to={`/vacancy/edit/${data.id}`}>Edit</Link>
                    </div>
                </footer>
            </article>
        )
    }
}

function mapStateToProps(state) {
    const { vacancies, dispatch } = state;
    return {
        vacancies,
        dispatch
    };
}

export default connect(mapStateToProps)(CompanyCard);