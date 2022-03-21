import React from 'react'
import { Link, useParams } from 'react-router-dom'
import NavBar from '../../components/nav/NavBar'
import './Search.css'

const apiURL = process.env.REACT_APP_BACKEND_API_URL || 'http://localhost:6969/api/videos'

function SearchPage() {

    var { query } = useParams()
    const [searchResults, setSearchResults] = React.useState([])

    const fetchSearch = async () => {
        const response = await fetch((`${apiURL}/search`),
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: query
                })
            })
        const data = await response.json()

        setSearchResults(data)
    }

    React.useEffect(() => {
        try {
            fetchSearch()
        } catch (err) {
            console.log("error :", err)
        }
    }, [])

    return (
        <div>
            <NavBar
                query={query}
            />
            {
                searchResults.length > 0 ?
                    (
                        <div className='search-results'>
                            <h1>
                                Search Results for "{query}"
                            </h1>
                            {searchResults.map((video, index) => {
                                return (
                                    <div className='search-result' key={index}>
                                        <Link to={`/video/${video.id}`}>
                                            <div className='search-result-thumbnail'>
                                                <img
                                                    className='search-result-thumbnail-img'
                                                    src="https://i.ytimg.com/vi/dQw4w9WgXcQ/hq720.jpg" alt="thumbnail" />

                                            </div>
                                            <div className='search-result-details'>
                                                <div className='search-result-title'>

                                                    <h2>
                                                        {video.title}
                                                    </h2>
                                                    <p>
                                                        {video.description.slice(0, 200) + '...'}
                                                    </p>
                                                    <div>
                                                        <span>
                                                            <i className="fas fa-eye"></i>
                                                            {video.views}B views
                                                        </span>
                                                        <span>
                                                            <i className="fas fa-thumbs-up"></i>
                                                            {video.likes}M likes
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='search-result-channel'>
                                                    {/* <Link to={`/channel/${video.channel.id}`}>{video.channel.name}</Link> */}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    ) : (
                        <div className='search-results'>
                            <div className='search-result'>
                                <h1>
                                    No results found for {query}
                                </h1>
                            </div>
                        </div>
                    )

            }

        </div>
    )
}

export default SearchPage