import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import NavBar from '../../components/nav/NavBar'

import { userData } from '../../data/userData'

function ProfilePage() {
    const { id } = useParams()
    const history = useHistory()

    const [userId, setUserId] = React.useState(0)
    const [user, setUser] = React.useState({})


    const userGen = (id) => {
        const user = userData.find(user => user.address === id)
        setUser(user)
    }

    React.useEffect(() => {
        setUserId(id)
        userGen(id)
    }, [])

    const handleRoutes = (route) => {
        history.push(route)
    }

    return (
        <div className="profile-page">
            <NavBar />
            <div className="profile-page-content">

                <div className="profile-page-top">
                    <div className="profile-page-top-left">
                        <img src={user.image} alt="profile" />
                        <button>
                            <i class="fa-solid fa-arrow-up-from-bracket"></i>
                            Change Picture
                        </button>
                    </div>
                    <div className="profile-page-top-right">
                        <div>
                            <h1>
                                {
                                    user.first_name + ' ' + user.last_name
                                }
                            </h1>
                            <h3 onClick={() => {
                                navigator.clipboard.writeText(userId)
                            }}
                                className="tooltip"
                            >
                                <i>
                                    <span className="tooltiptext">
                                        Click to copy
                                    </span>
                                    {userId}
                                </i>
                                <i className="fas fa-copy" ></i>
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur venenatis, nisl nisi consectetur purus, eget egestas nisl nisi eget.
                            </p>
                            <div>
                                <button
                                    onClick={() => handleRoutes('/channel/' + userId)}
                                >
                                    <i class="fa-solid fa-video-camera"></i>
                                    Videos
                                </button>
                                <button>
                                    <i class="fa-solid fa-comment-alt"></i>
                                    Message
                                </button>
                            </div>
                        </div>
                        <button>
                            <i className="fas fa-edit"></i>
                        </button>
                    </div>
                </div>
                <div className="line" />
                <div className="profile-page-bottom">
                    <div className="profile-page-bottom-header">
                        <h2>
                            209
                            Followers
                            <i class="fa-solid fa-user-group"></i>
                        </h2>
                        <h2>
                            12
                            Following
                            <i class="fa-solid fa-person"></i>
                        </h2>
                        <h2>
                            18K
                            Views
                            <i class="fa-solid fa-eye"></i>
                        </h2>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default ProfilePage