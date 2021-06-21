import React, { useState } from 'react'
import { storage } from '../database/firebase'

function ImgLink({imgLink, setImgLink, setLinkSubmitted}) {

  const [file, setFile] = useState(null)

  const handleImageAsFile = (e) => {
    if(e.target.files[0]){
      setFile(e.target.files[0])
    }
  }

  const handleLinkChange = (e) => {
      setImgLink(e.target.value);
  };

  console.log('file: ', file)
  
  const handleImageSubmit = () => {
    if(file != null){
      const uploadTask = storage.ref(`images/${file.name}`).put(file);
      uploadTask.on(
        "state_changed",
        snapshot => {},
        error => {
          console.log(error)
        },
        () => {
          storage
            .ref("images")
            .child(file.name)
            .getDownloadURL()
            .then(url => {
              setImgLink(url)
              console.log(url)
              setFile(null)
              setLinkSubmitted(true)
            })
        }
      )
    }else{
      if(imgLink.match(/\.(jpeg|jpg|gif|png)$/) != null){
        setLinkSubmitted(true);
      }else{
        alert('Please paste a valid image link: .png, .jpg, .gif')
      }
    } 
  };

    return (
        <div className="header">
            <div className='column'>
              <input
              type="text"
              className="input-text"
              placeholder='Image Link...'
              onChange={handleLinkChange}
              />
              <div className='or'>
                or&nbsp;&nbsp;  
                <input type='file' className='input-file'
                  onChange={handleImageAsFile}/>
              </div>
            </div>
           
            <button className="submit-btn" onClick={handleImageSubmit}>
            Import
            </button>
        </div>
    )
}

export default ImgLink
