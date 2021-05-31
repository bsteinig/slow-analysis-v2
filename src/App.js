import React, { useState } from 'react'
import Sidebar from './Components/sidebar'

import StickyBox from "react-sticky-box"
import './Styles/header.css'
import ImgLink from './Components/imgLink'
import GraphComp from './Components/graphComp'
import Form from './Components/form'

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
  });

  const [content, setContent] = useState([{id: 0},{id: 1},{id: 2},{id: 3},{id: 4},{id: 5}])
  const [options, setOptions] = useState([
  {val: 'title', option: 'Title'},
  {val: 'source', option: 'Source'},
  {val: 'xAxis', option: 'X-Axis'},
  {val: 'yAxis', option: 'Y-Axis'},
  {val: 'graph', option: 'Graph'},
])

  const setComp = (e) => {
    setSelection(e.target.value);
    switch (e.target.value) {
      case 'b':
        setTitle('Basic')
        setGridNums({
          a: 8,
          b: 75,
          c: 7,
          d: 10,
          e: 7,
          f: 93,
        })
        setOptions([
          {val: 'title', option: 'Title'},
          {val: 'source', option: 'Source'},
          {val: 'xAxis', option: 'X-Axis'},
          {val: 'yAxis', option: 'Y-Axis'},
          {val: 'graph', option: 'Graph'},
        ])
        break;
      case 'r':
        setTitle('Extra Row')
        setGridNums({
            a: 7,
            b: 70,
            c: 8,
            d: 8,
            e: 7,
            f: 93,
            g: 7
        })
        setOptions([
          {val: 'title', option: 'Title'},
          {val: 'source', option: 'Source'},
          {val: 'xAxis', option: 'X-Axis'},
          {val: 'yAxis', option: 'Y-Axis'},
          {val: 'graph', option: 'Graph'},
          {val: 'xAxisT', option: 'Top X-Axis'}
        ])
        break;
      case 'c':
        setTitle('Extra Column')
        setGridNums({
          a: 7,
          b: 78,
          c: 8,
          d: 7,
          e: 7,
          f: 85,
          g: 8,
        })
        setOptions([
          {val: 'title', option: 'Title'},
          {val: 'source', option: 'Source'},
          {val: 'xAxis', option: 'X-Axis'},
          {val: 'yAxis', option: 'Y-Axis'},
          {val: 'graph', option: 'Graph'},
          {val: 'points', option: 'Points'}
        ])
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
          <Sidebar setComp={setComp} selection={selection} />
        </StickyBox>
        <div className='content'>
          <h1 className="comp-title">{title}</h1>
          <ImgLink imgLink={imgLink} setImgLink={setImgLink} setLinkSubmitted={setLinkSubmitted} />
          {linkSubmitted ?
            <div>
              <GraphComp imgLink={imgLink} gridNums={gridNums} setGridNums={setGridNums} selection={selection} options={options}/>
              <Form options={options} content={content} setContent={setContent} />
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
