import React from 'react'

function ImgLink({imgLink, setImgLink, setLinkSubmitted}) {

    const handleLinkChange = (e) => {
        setImgLink(e.target.value);
      };
    
      const handleImageSubmit = () => {
        if(imgLink.match(/\.(jpeg|jpg|gif|png)$/) != null){
          setLinkSubmitted(true);
        }else{
          alert('Please paste a valid image link: .png, .jpg, .gif')
        }
      };

    return (
        <div className="header">
            <input
            type="text"
            className="input-text"
            placeholder='Image Link...'
            onChange={handleLinkChange}
            />
            <button className="submit-btn" onClick={handleImageSubmit}>
            Import
            </button>
        </div>
    )
}

export default ImgLink
