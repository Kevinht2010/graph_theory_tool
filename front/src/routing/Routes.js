import React from 'react'
import { Switch, BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Data from '../display/data/Data'
import TokenPage from '../display/authentication/TokenPage'

export default function Routes() {
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={() => <Data/>}/>
            <Route exact path="/confirm_email/:token" component={() => <TokenPage/>}/>
            <Route path='/'><Redirect to='/'/></Route>
          </Switch>
        </Router>
    )
}
