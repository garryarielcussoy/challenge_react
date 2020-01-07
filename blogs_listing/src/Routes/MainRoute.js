import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'

import {MainPage} from '../pages/MainPage'
import {Masuk} from '../pages/Masuk'

export const MainRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/masuk" component={Masuk} />
                <Route exact path="/category/:category" component={MainPage} />
            </Switch>
        </BrowserRouter>
    )
}