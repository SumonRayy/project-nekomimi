import React from 'react'
import { useHistory } from 'react-router-dom'

function SearchBar({ query }) {

    const history = useHistory()
    const [search, setSearch] = React.useState('')

    React.useEffect(() => {
        if (query) {
            setSearch(query)
        }
    }, [])

    const handleRoute = (route) => {
        history.push(route)
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSearch = () => {
        handleRoute(`/search/${search}`)
    }

    return (
        <div className='search-box'>
            <input className='search-txt' type="text" name="" placeholder="Type to search"
                value={search}
                onChange={handleChange}
            />
            <button className='search-btn'
                onClick={handleSearch}
            ><i className="fas fa-search"></i></button>
        </div>
    )
}

export default SearchBar