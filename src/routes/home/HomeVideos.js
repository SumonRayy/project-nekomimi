import React from 'react'
import { Link } from 'react-router-dom'

import VideoCard from '../../components/cards/VideoCard'
import { videoArray } from '../../data/videoData'

function HomeVideos() {
    return (
        <div className='homepage-videos'>
            <ul>
                {videoArray.map(video => (
                    <li key={video.id}>
                        <Link to={`/video/${video.id}`} key={video.id}>
                            <VideoCard
                                image={video.image}
                                title={video.title}
                                channel={video.channel}
                                channelLogo={video.channelLogo}
                                views={video.views}
                                likes={video.likes}
                                duration={video.duration}
                                video={video.url}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HomeVideos