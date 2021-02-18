import React, { Fragment, useState, useRef } from 'react'

function ImportLeads({importProperties}) {

    const fileRef = useRef(null)

 
    const handeUpload = () => {
        const data = new FormData()
        data.append('csv', fileRef.current.files[0]);
        importProperties(data)
        .then((res) => {
            console.log(res)
            })
  }

    return(
        <>
        <form>
            <label>
                upload file
                <input name="csv" type="file" ref={fileRef}/>
            </label>
        </form>
            <div type="submit" onClick={handeUpload}>upload</div>
        </>
    )

}

export default ImportLeads
