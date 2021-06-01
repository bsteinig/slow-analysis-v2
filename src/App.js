import React, { useState } from 'react'
import Sidebar from './Components/sidebar'
import ReactSrcDocIframe from 'react-srcdoc-iframe';
import StickyBox from "react-sticky-box"
import './Styles/header.css'
import ImgLink from './Components/imgLink'
import GraphComp from './Components/graphComp'
import Form from './Components/form'



function App() {

  const [bound,setBound] =useState(5)

  const [exported, setExported] = useState(false)
  const [htmlDoc, setHtmlDoc] = useState(`<html><head>
  <title>Hello Page</title>
</head>
<body>
    <p>Hello this is string html</p>
</body></html>`)

  const [imgLink, setImgLink] = useState('')
  const [linkSubmitted, setLinkSubmitted] = useState(false)
  const [generated, setGenerated] = useState(false)

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
    setContent([{id: 0},{id: 1},{id: 2},{id: 3},{id: 4},{id: 5}, {id: 6}])
    let fields = document.getElementsByClassName('form-input')
    for(var i = 0; i < fields.length; i++){
      fields[i].value = ''
    }
    setHtmlDoc(`<html><head>
    <title>Hello Page</title>
  </head>
  <body>
      <p>Submit for preivew</p>
  </body></html>`)
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
       setBound(5);
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
        setBound(6);
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
        setBound(6);
        break;
      case 'e':
        setTitle('Experimental')
        break;
      default:
        return null;
    }
  }

  const exportHTML = () => {
    var shownTxt = "[ ", titleTxt = "[ ", infoTxt = "[ "
    let count = 0
    if(content.length < bound + 1){ alert('Please complete the form [1]');
    return  }
    for (var i = 0; i < bound+1; i++){
      if(content[i].hasOwnProperty('comp')){
        shownTxt = shownTxt + "'"  + String(content[i].comp) + "', "
        count++
      }
      if(content[i].hasOwnProperty('title')){
        titleTxt = titleTxt + "'" + String(content[i].title) + "', "
        count++
      }
      if(content[i].hasOwnProperty('info')){
        infoTxt = infoTxt + "'" + String(content[i].info) + "', "
        count++
      }
    }
    shownTxt = shownTxt + "]"
    titleTxt = titleTxt + "]"
    infoTxt = infoTxt + "]"
    if((count !== 18 && bound === 5) || (count !== 21 && bound === 6)){
      alert('Please complete the form [2]')
      return 
    }
    console.log(shownTxt, titleTxt, infoTxt)
    let temp = (`<html> <head> <meta charset="utf-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <title></title> <meta name="description" content=""> <meta name=" viewport" content="width=device-width, initial-scale=1"> <style> @import url('https://fonts.googleapis.com/css2?family=Bitter:wght@400;500;700&display=swap'); * { box-sizing: border-box; margin: 0; padding: 0; font-family: "Bitter", 'Times New Roman', Times, serif; } .container { display: flex; flex-direction: row; } /* Image Component */ .img-comp { flex: 2; position: relative; display: block; } .responsive { width: 100%; height: auto; display: block; border: 2px solid black; } .grid { position: absolute; top: 0; left: 0; height: 100%; width: 100%; /* grid stying */ visibility: hidden; display: grid; grid-template: ${gridNums.a}% ${selection === 'r' ? `${gridNums.g}%` : ''} ${gridNums.b}% ${gridNums.c}% ${gridNums.d}% / ${gridNums.e}% ${gridNums.f}% ${selection === 'c' ? `${gridNums.g}%` : ''}; grid-template-areas: ${ selection === 'b' ? `'title title''yAxis graph''xAxis xAxis''source source'` : selection === 'r' ? `'title title' 'xAxisT xAxisT' 'yAxis graph' 'xAxis xAxis' 'source source'` : `'title title title' 'yAxis graph points' 'xAxis xAxis xAxis' 'source source source'` }; } .title { grid-area: title; background-color: black; opacity: .75; visibility: inherit; } .yAxis { grid-area: yAxis; background-color: black; opacity: .75; visibility: inherit; } .graph { grid-area: graph; background-color: black; opacity: .75; visibility: inherit; } .points { grid-area: points; background-color: black; opacity: .75; visibility: inherit; } .xAxis { grid-area: xAxis; background-color: black; opacity: .75; visibility: inherit; } .xAxisT { grid-area: xAxisT; background-color: black; opacity: .75; visibility: inherit; } .source { grid-area: source; background-color: black; opacity: .75; visibility: inherit; } /* Info Component */ .info-comp { flex: 1; padding-left: .5rem; display: flex; flex-direction: column; align-items: center; } .headline { font-weight: 700; font-size: 1.75vw; color: rgb(19, 133, 185); } .comp-title { margin-top: 1.25vw; font-weight: 500; font-size: 1.75vw; margin-bottom: 1.25vw; } .comp-info { font-weight: 400; font-size: 1.5vw; letter-spacing: 1px; line-height: 1; margin-left: 1.5vw; margin-right: 1vw; height: 27vw; overflow: auto; } /* Javascript Stuff */ .btn-group { display: flex; flex-direction: row; justify-content: space-around; align-items: center; } .btn { display: flex; color: #fff; font-size: 1.75vw; letter-spacing: 1px; line-height: 1; outline: 0; border: none; padding: 1.2vw; background-color: black; margin: 1.5vw; } .btn:hover { background-color: rgb(19, 133, 185); cursor: pointer; } </style> </head> <body> <div class="container"> <div class="img-comp"> <a href="https://ourworldindata.org/world-population-growth#how-has-world-population-growth-changed-over-time" target="_blank" rel="noopener noreferrer"> \ <img src="${imgLink}" alt="graph" width="700px" height="435px" class="responsive" /> </a> <a class='grid-border' href="https://ourworldindata.org/world-population-growth#how-has-world-population-growth-changed-over-time" target="_blank" rel="noopener noreferrer"> <div class="grid" id="grid"> <div class="title" id="title"></div> <div class="yAxis" id="yAxis"></div> <div class="graph" id="graph"></div> <div class="xAxis" id="xAxis"></div> <div class="source" id="source"></div> ${ selection === 'r' ? `<div class="xAxisT" id="xAxisT"></div>` : ''} ${ selection === 'c' ? `<div class="points" id="points"></div>`: ''} </div> </a> </div> <div class="info-comp"> <div class="btn-group"> <button class="btn" onclick="nextClick()">Continue</button> </div> <h3 class="comp-title" id="comp-title">Click Continue to begin</h3> <h5 class="comp-info" id="comp-info"></h5> </div> </div> <script> let comp_title = ${titleTxt}; let comp_content = ${infoTxt}; let id_table = ${shownTxt}; let gIndex = id_table.indexOf('grid'); let index = gIndex === 0 ? comp_title.length - 1 : gIndex - 1; function nextClick() { ++index; if(index > comp_title.length-1){ index = 0; } if (index === gIndex) { for (var i = 0; i < comp_title.length; ++i) { document.getElementById(id_table[i]).style.visibility = "inherit"; } document.getElementById('grid').style.visibility = "hidden"; } else { index === 0 ? document.getElementById(id_table[comp_title.length-1]).style.visibility = "visible" : document.getElementById(id_table[index - 1]).style.visibility = "visible"; } console.log(index); document.getElementById(id_table[index]).style.visibility = "hidden"; document.getElementById("comp-title").innerHTML = comp_title[index]; document.getElementById("comp-info").innerHTML = comp_content[index]; } </script> </body> </html>`)
    setHtmlDoc(temp)
    document.getElementById('export-box').innerHTML = temp
    setExported(true)
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
              <Form options={options} content={content} setContent={setContent} setGenerated={setGenerated}/>
              { generated ?
              <div className="export-comp">
                <button className="form-gen" onClick={() => {exportHTML()}}>Submit</button>
                <textarea id='export-box' className='export-box'/>
                { exported ?
                <ReactSrcDocIframe srcDoc={htmlDoc} width="1000" height="450" />
                :
                <></>
                }
                
              </div>
              :
              <></>
              }
            </div>
            :
            <></>
          }
        </div>
        
      </div>
    </div>
    
  );
}

export default App;
