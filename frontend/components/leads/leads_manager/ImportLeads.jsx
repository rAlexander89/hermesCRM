import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { importProperties } from '../../../actions/property_actions'

function ImportLeads() {
    
    const [ fileName, setFileName ] = useState('no file selected')
    const dispatch = useDispatch()
    const fileRef = useRef(null)



    const handeUpload = () => {
        const data = new FormData()
        
        data.append('csv', fileRef.current.files[0])
        
        dispatch(importProperties(data))
            .then((res) => {
                console.log('success')
            })
    }

    const onFileLoad = e => {
        let newFileName = e.target.files[0].name
        setFileName(newFileName)        
    }

    return  <div className='file-upload-container'>
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
}

export default ImportLeads
