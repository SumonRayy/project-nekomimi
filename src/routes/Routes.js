import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import VideoPage from './content/VideoPage'
import Homepage from './home/HomePage'

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/video" component={VideoPage} />
            </Switch>
        </Router>
    )
}

export default Routes