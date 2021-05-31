import React, { useState } from 'react'
import BasicRow from '../Assets/BasicRow'
import BasicCol from '../Assets/BasicCol'
import Row from '../Assets/Row'
import Col from '../Assets/Col'
import Custom from './custom'
import Grid from './grid'
import "../Styles/image.css"


function GraphComp({imgLink, gridNums, setGridNums, selection, options}) {

    const [gToggle, setGToggle] = useState(true)

    function gridToggle(){
        if(gToggle){
            document.getElementById('grid').style.visibility = 'hidden';
        }else{
            document.getElementById('grid').style.visibility = 'visible';
        }
        setGToggle(!gToggle)
    }


    function loadComp(){
        switch(selection){
          case 'b':
            return (<div className="slider-comp">
                        <BasicRow gridNums={gridNums} setGridNums={setGridNums} />
                        <BasicCol gridNums={gridNums} setGridNums={setGridNums} />
                    </div>)
          case 'r':
            return (<div className="slider-comp">
                        <Row gridNums={gridNums} setGridNums={setGridNums} />
                        <BasicCol gridNums={gridNums} setGridNums={setGridNums} />
                    </div>)
          case 'c':
            return (<div className="slider-comp">
                        <BasicRow gridNums={gridNums} setGridNums={setGridNums} />
                        <Col gridNums={gridNums} setGridNums={setGridNums} />
                    </div>)
          case 'e':
            return <Custom gridNums={gridNums} setGridNums={setGridNums}/>
          default:
            return null;
        }
    }

    return (
        <div className='container'>
            <div className="img-container">
                <button className={`eye-grid-toggle ${gToggle ? '' : 'eye-toggle-down'}`} onClick={() => gridToggle()}>
                    { gToggle ?
                    <i className="fas fa-eye-slash"></i>
                    :
                    <i className="fas fa-eye"></i>  
                    }
                </button>
                <div className="image-comp">
                    <img className="img" src={imgLink} alt="img"/>
                    <Grid gridNums={gridNums} selection={selection} options={options}/>
                </div>
            </div>
            {loadComp()}
        </div>
    )
}

export default GraphComp
