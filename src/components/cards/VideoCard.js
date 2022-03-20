import React from 'react'

import './Cards.css'

function VideoCard(props) {

    const {
        image,
        title,
        channel,
        channelLogo,
        views,
        likes,
        duration
    } = props

    const onClickRedirect = () => {
    }

    return (
        <div className='videoCard' onClick={onClickRedirect}>
            <div className='videoCard-image'>
                <img src={image} alt='video' />
                <span className='videoCard-duration'>{duration}</span>
            </div>
            <div className='videoCard-text'>
                <h4>{title}</h4>
                <div className='videoCard-stats'>
                    <div className='videoCard-channel'>
                        <img className='videoCard-stats-image' src={channelLogo} alt='channel' />
                        <p>{channel}</p>
                    </div>
                    <div className='videoCard-stats-text'>
                        <i className='fas fa-eye'></i>
                        <span>{views}</span>
                        <i className='fas fa-thumbs-up'></i>
                        <span>{likes}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard