import React from 'react'
import { Link } from 'react-router-dom'

const CardHeader = ({ data }) => (
    <header className="card-info__header">
        <div className="card-info__header-vacancy">
            <h1 className="card-info__header-vacancy-position">{ data.pageName }</h1>
            {data.company ? <h2 className="card-info__header-vacancy-company"><Link to={`/account/company/${data.id}`}>{ data.company }</Link></h2> : null}
        </div>
        {data.salary ?
            <div className="card-info__header-salary">
                <h2 className="card-info__header-salary-amount">
                    <span className="card-info__header-salary-amount-number">{ data.salary.toLocaleString('ru') }</span>
                    <span className="card-info__header-salary-amount-currency">₽</span>
                </h2>
            </div>
            : null
        }
    </header>
)

export default CardHeader;