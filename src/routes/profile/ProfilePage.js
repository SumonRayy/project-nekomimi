import React from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../../components/nav/NavBar'

function ProfilePage() {
    const { id } = useParams()

    return (
        <div className="profile-page">
            <NavBar />
            <h1>
                Profile Page
            </h1>
            <p>
                Your address : {id}
            </p>
        </div>
    )
}

export default ProfilePage