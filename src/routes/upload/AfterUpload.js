import React from 'react'
import { useHistory } from 'react-router-dom'

function AfterUpload({
    setUploaded,
    file,
    setFile
}) {

    const history = useHistory();

    const [loading, setLoading] = React.useState(true)

    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [tags, setTags] = React.useState([])
    const [thumbnail, setThumbnail] = React.useState(null)

    React.useEffect(() => {

        setTimeout(async () => {
            setLoading(false)
        }, 2000)

        if (file) {
            setTitle(file.name)
        }

        if (thumbnail && thumbnail.type === 'image/png') {
            setThumbnail(thumbnail)
        } else {
            setThumbnail(null)
        }

    }, [file, thumbnail]);

    const uploadThumbnail = async (e) => {
        e.preventDefault()
        document.getElementById('thumbnail').click()

    }

    const handleRoutes = (route) => {
        history.push(route)
    }


    const handleSubmit = async () => {
        console.log(title, description, tags, thumbnail)
        setUploaded(false)
        setFile(null)

        handleRoutes('/')
    }

    const handleCancel = async () => {
        setUploaded(false)
        setFile(null)

        handleRoutes('/upload')
    }

    return (
        <div className="upload-page-content">
            <div className="upload-page-header">
                <h1>Upload Your Video</h1>
                <div className="line" />
            </div>

            {
                loading ? (
                    <div className="check-animation">
                        <i className="fas fa-check-circle" />
                        <h1>Uploaded Successfully!</h1>
                    </div>
                ) : (
                    <div className="upload-form">
                        <form>
                            <div className="upload-form-header">
                                <h2>Details of Uploaded Video</h2>
                            </div>
                            <div className="upload-form-body">
                                <div className="upload-form-body-left">
                                    <div className="form-group">
                                        <label htmlFor="title">Title</label>
                                        <input type="text" id="title" name="title"
                                            value={
                                                title
                                            }
                                            onChange={(e) => {
                                                e.preventDefault()
                                                setTitle(e.target.value)
                                            }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <textarea id="description" name="description" rows="5"
                                            value={
                                                description
                                            }
                                            onChange={(e) => {
                                                e.preventDefault()
                                                setDescription(e.target.value)
                                            }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="tags">Tags</label>
                                        <input type="text" id="tags" name="tags"
                                            value={
                                                tags
                                            }
                                            onChange={(e) => {
                                                e.preventDefault()
                                                setTags(e.target.value.split(','))
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="upload-form-body-right">
                                    <div className="uploaded-video">
                                        <video src={URL.createObjectURL(file)} controls />
                                        {
                                            thumbnail ? (
                                                <div className="video-thumbnail">
                                                    <img src={thumbnail} alt="thumbnail" />
                                                </div>
                                            ) : (
                                                <></>
                                            )
                                        }
                                    </div>
                                    <button
                                        onClick={(e) => uploadThumbnail(e)}
                                        type="button"
                                    >
                                        Upload Thumbnail
                                    </button>
                                    <input type="file" id="thumbnail" name="thumbnail"
                                        style={{ display: 'none' }} />
                                </div>
                            </div>

                            <div className="upload-form-footer">
                                <button
                                    className="publish-button"
                                    onClick={() => handleSubmit()}

                                    type="submit"
                                >
                                    <i className="fa-solid fa-rocket"></i>
                                    Publish
                                </button>

                                <button
                                    className="cancel-button"
                                    onClick={() => handleCancel()}
                                >
                                    <i className="fa-solid fa-times"></i>
                                    cancel
                                </button>

                            </div>
                        </form>
                    </div>
                )
            }

        </div>
    )
}

export default AfterUpload