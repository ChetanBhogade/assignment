import React from 'react'
import { Route } from 'react-router-dom'
import SignUpPage from './Container/SignUpPage'

function Routes() {
    return (
        <div>
            <Route exact path="/" component={SignUpPage} />
        </div>
    )
}

export default Routes
