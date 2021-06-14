import React, { useState } from 'react'
import { storage } from '../database/firebase'

function ImgLink({imgLink, setImgLink, setLinkSubmitted}) {

  const [file, setFile] = useState(null)

  const handleImageAsFile = (e) => {
    const image = e.target.files[0]
    setFile(image)
  }

  const handleLinkChange = (e) => {
      setImgLink(e.target.value);
    };
  
  const handleImageSubmit = () => {
    if(file !== null){
      const ref = storage.ref()
      var imgRef = ref.child(`./images/${file.name}`)
      const uploadTask = imgRef.put(file);
      uploadTask.on('state_changed', console.log, console.error, () => {
        uploadTask.snapshot.ref.getDownloadURL()
        .then((url) => {
          console.log(url)
          setFile(null);
          setImgLink(url)
          setLinkSubmitted(true);
        })
      })
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
            <div className='row'>
              <input
              type="text"
              className="input-text"
              placeholder='Image Link...'
              onChange={handleLinkChange}
              />
              <input type='file' className='input-file'
                onChange={handleImageAsFile}/>
            </div>
           
            <button className="submit-btn" onClick={handleImageSubmit}>
            Import
            </button>
        </div>
    )
}

export default ImgLink
