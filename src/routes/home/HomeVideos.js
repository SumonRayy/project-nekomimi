import React from 'react'

import VideoCard from '../../components/cards/VideoCard'
import { videoArray } from '../../data/videoData'

function HomeVideos() {
    return (
        <div className='homepage-videos'>
            <ul>
                {videoArray.map(video => (
                    <li key={video.id}>
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
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HomeVideos