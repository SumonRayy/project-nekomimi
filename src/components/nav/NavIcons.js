import React from 'react'
import { Redirect } from 'react-router-dom'

import { userData } from '../../data/userData'

function NavIcons() {

    const [user, setUser] = React.useState(false)
    const [userMenu, setUserMenu] = React.useState(false)

    const handleConnect = () => {
        setUser(true)
    }

    const randomIntGen = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const handleAccount = () => {
        setUserMenu(!userMenu)
    }

    const handleLogout = () => {
        setUser(false)
        setUserMenu(false)
    }

    return (
        <>
            {
                user ? (
                    <div className='menu-icons'>
                        <i className="fas fa-bell"></i>
                        <i className="fas fa-upload"></i>
                        <i className="fas fa-user" onClick={handleAccount}></i>
                        {
                            userMenu ? (
                                <div className='user-menu'>
                                    <div className='user-menu-header'>
                                        {userData[randomIntGen(0, userData.length - 1)].address.slice(0, 10) + '...'}
                                        <a>
                                            Manage Account
                                        </a>
                                    </div>
                                    <div className='user-menu-body'>
                                        <span>
                                            <i className="fas fa-user"></i>
                                            Your Channel
                                        </span>
                                        <span>
                                            <i className="fas fa-thumbs-up"></i>
                                            Liked Videos
                                        </span>
                                        <span>
                                            <i className="fas fa-cog"></i>
                                            Settings
                                        </span>
                                        <span onClick={handleLogout}>
                                            <i className="fas fa-sign-out-alt"></i>
                                            Logout
                                        </span>
                                    </div>
                                </div>
                            ) : null
                        }
                    </div>
                ) : (
                    <div className='menu-icons'>
                        <button onClick={handleConnect}>
                            <i className="fas fa-sign-in-alt"></i>
                            connect
                        </button>
                    </div>
                )
            }
        </>
    )
}

export default NavIcons