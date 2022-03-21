import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import NavBar from '../../components/nav/NavBar'

import { videoArray } from '../../data/videoData'
import { commentData } from '../../data/commentData'

import './Profile.css'

function Dashboard() {

    const { id } = useParams()
    const history = useHistory()

    const handleRoutes = (route) => {
        history.push(route)
    }


    return (
        <div className="dashboard-page">
            <NavBar />
            <div className="dashboard-content">
                <div className='dashboard-header'>
                    <div className='dashboard-header-left'>
                        <h1>
                            Videos of <span onClick={() => handleRoutes(`/profile/${id}`)}>
                                {id.toString().slice(0, 5) + '...' + id.toString().slice(-5)}
                            </span>
                        </h1>
                        <button className='sort-button'>
                            <i className="fas fa-sort-amount-down"></i>
                            Sort by
                            <i className="fas fa-caret-down"></i>
                        </button>
                    </div>
                    <div className='dashboard-header-right'>
                        <button className='upload-button'
                            onClick={() => handleRoutes('/upload')}
                        >
                            <i className="fas fa-upload"></i>
                            Upload
                        </button>
                    </div>
                </div>
                <div className='dashboard-videos'>
                    {videoArray.map(video => {
                        return (
                            <div className='dashboard-video' key={video.id}>
                                <div className='dashboard-video-left' onClick={() => handleRoutes(`/video/${video.id}`)}>
                                    <img src={video.image} alt={video.title} />
                                </div>
                                <div className='dashboard-video-right'>
                                    <div className='dashboard-video-right-top'>
                                        <div>
                                            <h2>{video.title}</h2>
                                            <button>
                                                <i className="fas fa-edit"></i>
                                            </button>
                                        </div>
                                        <p>{video.description}</p>
                                    </div>
                                    <div className='dashboard-video-right-bottom'>
                                        <span>
                                            <i className="fas fa-eye"></i>
                                            {video.views}
                                        </span>
                                        <span>
                                            <i className="fas fa-heart"></i>
                                            {video.likes}
                                        </span>
                                        <span>
                                            <i className="fas fa-comment"></i>
                                            {commentData.length}
                                        </span>
                                        <span>
                                            <i className="fas fa-clock"></i>
                                            {video.duration}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Dashboard