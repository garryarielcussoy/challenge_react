import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'

import MainPage from '../pages/MainPage'
import Masuk from '../pages/Masuk'
import Profile from '../pages/Profile'

class MainRoute extends React.Component {
    render(){
        return (
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/masuk" component={Masuk} />
                <Route path="/profile" component={Profile} />
                <Route exact path="/category/:category" component={MainPage} />
            </Switch>
        )
    }
}
export default MainRoute