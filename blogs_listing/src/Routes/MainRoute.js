import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'

import {MainPage} from '../pages/MainPage'

export const MainRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" component={MainPage} />
            </Switch>
        </BrowserRouter>
    )
}