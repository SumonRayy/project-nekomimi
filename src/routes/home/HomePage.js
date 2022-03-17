import React from 'react'
import NavBar from '../../components/nav/NavBar'
import './Home.css'
import HomeVideos from './HomeVideos'


function Homepage() {
    return (
        <div className='homepage'>
            <NavBar />
            <HomeVideos />
        </div>
    )
}

export default Homepage