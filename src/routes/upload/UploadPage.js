import React from 'react'
import NavBar from '../../components/nav/NavBar'
import AfterUpload from './AfterUpload'
import BeforeUpload from './BeforeUpload'

import './Upload.css'

function UploadPage() {

    const [file, setFile] = React.useState(null)
    const [uploaded, setUploaded] = React.useState(false)

    return (
        <div className="upload-page">
            <NavBar />

            {
                uploaded ? (
                    <AfterUpload
                        setUploaded={setUploaded}
                        file={file}
                        setFile={setFile}
                    />
                ) : (
                    <BeforeUpload
                        setUploaded={setUploaded}
                        file={file}
                        setFile={setFile}
                    />
                )
            }

        </div>
    )
}

export default UploadPage