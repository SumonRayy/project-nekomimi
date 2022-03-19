import React from 'react'
import { useHistory } from 'react-router-dom'

import { userData } from '../../data/userData'

function NavIcons() {

    const [user, setUser] = React.useState(false)
    const [account, setAccount] = React.useState({})
    const [userMenu, setUserMenu] = React.useState(false)

    const history = useHistory()

    const handleConnect = () => {
        setUser(true)
    }

    const randomIntGen = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const randomUser = () => {
        const user = userData[randomIntGen(0, userData.length - 1)]
        setAccount(user)
    }

    const handleAccount = () => {
        setUserMenu(!userMenu)
        randomUser()
    }

    const handleLogout = () => {
        setUser(false)
        setUserMenu(false)
    }

    const handleRoutes = (route, id) => {
        if (route === 'profile') {
            history.push('/profile' + (id ? '/' + id : ''))
        } else if (route === 'dashboard') {
            history.push('/dashboard' + (id ? '/' + id : ''))
        } else {
            history.push('/')
        }
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
                                        {account.address.slice(0, 10) + '...'}
                                        <a onClick={() => handleRoutes('profile', account.address)}>
                                            Manage Account
                                        </a>
                                    </div>
                                    <div className='user-menu-body'>
                                        <span onClick={() => handleRoutes('dashboard', account.address)}>
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