import React, { useState } from 'react'
import Sidebar from './Components/sidebar'

import StickyBox from "react-sticky-box"
import './Styles/header.css'
import ImgLink from './Components/imgLink'
import GraphComp from './Components/graphComp'

function App() {

  const [imgLink, setImgLink] = useState('')
  const [linkSubmitted, setLinkSubmitted] = useState(false)

  const [selection, setSelection] = useState('b')
  const [title, setTitle] = useState('Basic')

  const [gridNums, setGridNums] = useState({
    a: 8,
    b: 75,
    c: 7,
    d: 10,
    e: 7,
    f: 93,
  })

  const setComp = (e) => {
    setSelection(e.target.value);
    switch(e.target.value){
      case 'b':
        setTitle('Basic')
        break;
      case 'r':
        setTitle('Extra Row')
        break;
      case 'c':
        setTitle('Extra Column')
        break;
      case 'e':
        setTitle('Experimental')
        break;
      default:
        return null;
    }
  }

  return (
    <div className="App">
      <div className="row">
        <StickyBox>
          <Sidebar setComp={setComp} selection={selection}/>
        </StickyBox>
        <div className='content'>
          <h1 className="comp-title">{title}</h1>
          <ImgLink imgLink={imgLink} setImgLink={setImgLink} setLinkSubmitted={setLinkSubmitted}/>
          { linkSubmitted ?
            <div>
              <GraphComp imgLink={imgLink} gridNums={gridNums} setGridNums={setGridNums} selection={selection}/>
              <h4>Form</h4>
            </div>
          :
            <></>
          }
        </div>
      </div>
      <div className="row">
        Footer w/ Preview
      </div>
    </div>
  );
}

export default App;
