import React from 'react'
import { Link } from 'react-router-dom'

import './Nav.css'
import NavIcons from './NavIcons'

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
            <NavIcons user={false} />
        </div>
    )
}

export default NavBar