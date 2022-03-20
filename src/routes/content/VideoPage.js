import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'

import { videoArray } from '../../data/videoData'
import NavBar from '../../components/nav/NavBar'

import './Content.css'
import { commentData } from '../../data/commentData'

function VideoPage() {

    const { id } = useParams()

    const playerRef = React.useRef(null)
    const video = videoArray.find(video => video.id === parseInt(id))


    return (
        <div>
            <NavBar />
            <div className='video-page'>
                <div className='video-page-left'>
                    <div className='video-container'>
                        <div className='video-player'>
                            <ReactPlayer
                                ref={playerRef}
                                url={video.url}
                                width='55em'
                                height='30.9375em'
                            />
                            <div className='video-controls'>
                                <div className='video-controls-top'>
                                    {video.title}
                                </div>
                                <div className='video-controls-bottom'>
                                    <div className='video-controls-bottom-left'>
                                        <div className='video-controls-btn'>
                                            <i className="fa-solid fa-backward"></i>
                                        </div>
                                        <div className='video-controls-btn'>
                                            <i className="fas fa-play"></i>
                                        </div>
                                        <div className='video-controls-btn'>
                                            <i className="fa-solid fa-forward"></i>
                                        </div>
                                        <div className='video-controls-btn'>
                                            <i className="fa-solid fa-volume-off"></i>
                                        </div>
                                    </div>
                                    <div className='video-controls-bottom-right'>
                                        <div className='video-controls-btn'>
                                            <i className="fa-solid fa-film"></i>
                                        </div>
                                        <div className='video-controls-btn'>
                                            <i className="fa-solid fa-closed-captioning"></i>
                                        </div>
                                        <div className='video-controls-btn'>
                                            <i className="fa-solid fa-sliders"></i>
                                        </div>
                                        <div className='video-controls-btn'>
                                            <i className="fa-solid fa-expand"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='video-info'>
                        <div className='video-info-title'>
                            <h1>{video.title}</h1>
                        </div>
                        <div className='video-info'>
                            <div className='video-stats'>
                                <div className='video-stats-item'>
                                    <i className="fas fa-eye"></i>
                                    <span>{video.views} views</span>
                                </div>
                                <div className='video-stats-item'>
                                    <i className="fa-solid fa-clock"></i>
                                    <span>14th April, 2020</span>
                                </div>
                                <div className='video-stats-item'>
                                    <i className="fas fa-thumbs-up"></i>
                                    <span>{video.likes}</span>
                                </div>
                                <div className='video-stats-item'>
                                    <i className="fas fa-thumbs-down"></i>
                                    <span>Dislike</span>
                                </div>
                            </div>
                        </div>
                        <div className='video-channel'>
                            <div className='video-channel-img'>
                                <img src={video.channelLogo} alt={video.channel.name} />
                            </div>
                            <div className='video-channel-info'>
                                <h3>{video.channel}</h3>
                                <p>{video.channel.subscribers} 18K Followers</p>
                            </div>
                            <div className='video-channel-btn'>
                                <button>Follow</button>
                            </div>
                        </div>
                        {/* <p>{video.description}</p> */}
                    </div>
                    <div className='video-comments'>
                        <div className='video-comments-header'>
                            <img src={video.channelLogo} alt={video.channel.name} />
                            <input type='text' placeholder='Add a comment...' />
                            <button>Post</button>
                        </div>
                        <div className='video-comments-list'>
                            <h4>
                                Comment Section
                            </h4>
                            {
                                commentData.map(comment => {
                                    return (
                                        <div className='video-comments-item' key={comment.id}>
                                            <div className='video-comments-item-top'>
                                                <img src={comment.userImage} alt={comment.user} />

                                                <h5>{comment.user}</h5>
                                                <span>
                                                    {comment.time}
                                                </span>

                                            </div>
                                            <div className='video-comments-item-bottom'>
                                                <p>{comment.comment}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='video-page-right'>
                    <div className='video-list'>
                        <h3>
                            Recommended for you
                        </h3>
                        {videoArray.map(video => {
                            return (
                                <Link to={`/video/${video.id}`}>
                                    <div className='video-list-item'>
                                        <div className='video-thumbnail'>
                                            <img src={video.image} alt={video.title} />
                                        </div>
                                        <div className='video-list-item-info'>
                                            <h3>{video.title}</h3>
                                            <div>
                                                <img src={video.channelLogo} alt={video.channel.name} />
                                                <p>{video.channel}</p>
                                            </div>
                                            <div>
                                                <span>
                                                    20 minutes ago
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default VideoPage