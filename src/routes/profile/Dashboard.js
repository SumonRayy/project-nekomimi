import React from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../../components/nav/NavBar'

function Dashboard() {

    const { id } = useParams()

    return (
        <div className="dashboard-page">
            <NavBar />
            <h1>
                Dashboard Page
            </h1>
            <p>
                Your address : {id}
            </p>
        </div>
    )
}

export default Dashboard