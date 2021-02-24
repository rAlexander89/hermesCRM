import React, { useState, useRef } from 'react'

function ImportLeads({importProperties}) {
    const [ fileName, setFileName ] = useState('no file selected')

    const fileRef = useRef(null)


    const handeUpload = () => {
        const data = new FormData()
        data.append('csv', fileRef.current.files[0])
        importProperties(data)
        .then((res) => {
            console.log(res)
            })
    }

    const onFileLoad = e => {
        let newFileName = e.target.files[0].name
        setFileName(newFileName)        
    }


    return(
        <div className='file-upload-container'>
            <div className='file-container-left'>
                <div className='file-upload-header'>
                    Upload Leads &#40;.csv&#41;
                </div>
                
                <form className='file-upload-form'>
                    <label className='file-select-button'>
                        select csv
                        <input name="csv" type="file" onChange={onFileLoad}ref={fileRef}/>
                    </label>
                    <div className='file-preview'>
                        {`${fileName}`}
                    </div>
                </form>
            </div>

            <div className='file-container-right'>
                <div className='file-upload-submit' type="submit" onClick={handeUpload}>upload</div>
            </div>

        </div>
    )
}

export default ImportLeads
