import React, { useState } from 'react'
import Basic from './basic'
import ExtraRow from './extraRow'
import ExtraCol from './extraCol'
import Custom from './custom'

function GraphComp({imgLink, gridNums, setGridNums, selection}) {

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
            return <Basic gridNums={gridNums} setGridNums={setGridNums} />
          case 'r':
            return <ExtraRow gridNums={gridNums} setGridNums={setGridNums}/>
          case 'c':
            return <ExtraCol gridNums={gridNums} setGridNums={setGridNums}/>
          case 'e':
            return <Custom gridNums={gridNums} setGridNums={setGridNums}/>
          default:
            return null;
        }
    }

    return (
        <div className="container">
            <button className={`grid-toggle ${gToggle ? '' : 'toggle-down'}`} onClick={() => gridToggle()}>
                { gToggle ?
                <i className="fas fa-eye-slash"></i>
                :
                <i className="fas fa-eye"></i>  
                }
            </button>
            <div className="image-comp">
                <img className="img" src={imgLink} alt="img"/>
                <div className="grid" id="grid"
                    style={{
                        gridTemplateRows: `${gridNums.a}% ${gridNums.b}% ${gridNums.c}% ${gridNums.d}%`,
                        gridTemplateColumns: `${gridNums.e}% ${gridNums.f}%`,
                    }}
                    >
                    <div className="title" id="title">Title</div>
                    <div className="yAxis" id="yAxis">Y-Axis</div>
                    <div className="graph" id="graph">Graph</div>
                    <div className="xAxis" id="xAxis"> X-Axis</div>
                    <div className="source" id="source">Source</div>
                </div>
            </div>
            {loadComp()}
        </div>
    )
}

export default GraphComp
