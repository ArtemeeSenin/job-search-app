import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({ user, component: Component, data, ...rest }) {
    return (
        <Route {...rest} render={
            props => { console.log(localStorage.getItem('user')); return(
                localStorage.getItem('user') ?
                    <Component data={data} {...props} />
                    :
                    <Redirect to="/sign-in"/>
            )}
        } />
    )
}

export default PrivateRoute;
