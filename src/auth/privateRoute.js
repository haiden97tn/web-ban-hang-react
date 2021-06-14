import React from 'react'
import { Redirect, Route } from 'react-router'

const PrivateRoute = ({ children }) => {
    return (
        <Route render={() => {
            if (sessionStorage.getItem('user')) {
                var user = sessionStorage.getItem('user')
                var user = JSON.parse(user);
                var userRole = user.user.role;
                return userRole == 1 ? children : <Redirect to={{ pathname: '/signin' }} />
            } else {
                return <Redirect to={{ pathname: '/signin' }} />
            }

        }} />
    )
}

export default PrivateRoute
