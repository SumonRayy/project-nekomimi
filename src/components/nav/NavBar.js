import React from 'react'
import { Link } from 'react-router-dom'

import './Nav.css'
import NavIcons from './NavIcons'
import SearchBar from './SearchBar'

function NavBar({ query }) {
    return (
        <div className='navbar'>
            <div className='App-brand'>
                <Link to='/'>
                    <img src="/logo.svg" alt="logo" />
                </Link>
            </div>
            <SearchBar
                query={query}
            />
            <NavIcons user={false} />
        </div>
    )
}

export default NavBar