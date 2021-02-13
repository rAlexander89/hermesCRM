import React, { Fragment, useState } from 'react'

function ImportLeads() {
    return (
        <form className='file-upload-form'>
            <div className='file-upload-header'>
                Upload Leads &#40;.csv&#41;
            </div>
            <div className='button-wrap'>
                <label className='new-button' for='upload'> choose file
                    <input id='upload' type='file'/>
                </label>
            </div>
            

            {/* <div className="custom-file">
                <div className='button-wrap'>
                    <input type="file" className="custom-file-input"/>
                </div>
            </div> */}
            <input type="submit" value="UPLOAD" className='upload-leads-button'/>
        </form>
    )
}

export default ImportLeads
