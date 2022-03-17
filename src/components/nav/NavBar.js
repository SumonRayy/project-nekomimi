import React from 'react'

import './Nav.css'

function NavBar() {
    return (
        <div className='navbar'>
            <div className='App-brand'>
                <img src="/logo.svg" alt="logo" />
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