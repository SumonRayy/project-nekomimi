import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import VideoPage from './content/VideoPage'
import Homepage from './home/HomePage'
import Dashboard from './profile/Dashboard'
import ProfilePage from './profile/ProfilePage'
import UploadPage from './upload/UploadPage'

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/video/:id" component={VideoPage} />
                <Route path="/profile/:id" component={ProfilePage} />
                <Route path="/channel/:id" component={Dashboard} />
                <Route path="/upload" component={UploadPage} />
            </Switch>
        </Router>
    )
}

export default Routes