import React from 'react'
import LoadingAnimation from '../../components/anim/loading.animation'

function BeforeUpload({
    setUploaded,
    file,
    setFile
}) {

    const [isUploading, setIsUploading] = React.useState(false)

    const handleFileChange = (e) => {
        const file = e.target.files[0]

        if (file.type !== 'video/mp4') {
            alert('Please upload a video file')
            setFile(null)
            return
        } else {
            setFile(file)
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        file && file.type === 'video/mp4' ? setIsUploading(true) : alert('Please upload a video file')

        setTimeout(() => {
            setIsUploading(false)
            setUploaded(true)
        }, 2000)
    }

    return (
        <div className="upload-page-content">
            <div className="upload-page-header">
                <h1>Upload Your Video</h1>
                <div className="line" />
            </div>
            {
                isUploading ?
                    (
                        <div className="uploading">
                            <div className="uploading-header">
                                <h2>Uploading...</h2>
                            </div>
                            <div className="uploading-body">
                                <div className="loading-animation">
                                    <LoadingAnimation />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="upload-form">
                            <input type="file" id="file" name="file"
                                onChange={(e) => handleFileChange(e)}
                            />
                            <button
                                className="upload-button"
                                onClick={(e) => handleSubmit(e)}
                            >
                                <i className="fas fa-upload"></i>
                                Upload
                            </button>
                        </div>
                    )
            }

        </div>
    )
}

export default BeforeUpload