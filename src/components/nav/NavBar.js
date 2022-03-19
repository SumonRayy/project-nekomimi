import React from 'react'
import { Link } from 'react-router-dom'

import './Nav.css'

function NavBar() {
    return (
        <div className='navbar'>
            <div className='App-brand'>
                <Link to='/'>
                    <img src="/logo.svg" alt="logo" />
                </Link>
            </div>
            <div className='search-box'>
                <input className='search-txt' type="text" name="" placeholder="Type to search" />
                <button className='search-btn'><i className="fas fa-search"></i></button>
            </div>
            <div className='menu-icons'>
                <i className="fas fa-bell"></i>
                <i className="fas fa-wallet"></i>
                <i className="fas fa-user"></i>
            </div>

        </div>
    )
}

export default NavBar