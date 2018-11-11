import React from 'react'

const CardHeader = ({ data }) => (
    <header className="card-info__header">
        <div className="card-info__header-vacancy">
            <h1 className="card-info__header-vacancy-position">{ data.name }</h1>
            {data.company ? <h2 className="card-info__header-vacancy-company"><a to="/info-card-company">{ data.company }</a></h2> : null}
        </div>
        {data.salary ?
            <div className="card-info__header-salary">
                <h2 className="card-info__header-salary-amount">
                    <span className="card-info__header-salary-amount-number">{ data.salaryNumber }</span>
                    <span className="card-info__header-salary-amount-currency">{ data.salaryCurrency }</span>
                </h2>
            </div>
            : null
        }
    </header>
)

export default CardHeader;