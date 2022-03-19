import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import VideoPage from './content/VideoPage'
import Homepage from './home/HomePage'
import ProfilePage from './profile/ProfilePage'

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/video/:id" component={VideoPage} />
                <Route path="/profile" component={ProfilePage} />
            </Switch>
        </Router>
    )
}

export default Routes