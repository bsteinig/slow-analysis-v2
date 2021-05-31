import React, { useState, useEffect } from 'react'
import  Slider from 'react-input-slider'
import '../Styles/slider.css'

function BasicRow({gridNums, setGridNums}) {

    const [slideLock, setSlideLock] = useState({
        a: false,
        b: false,
        c: false,
        d: false
    });
    const [lockedHeight, setLockedHeight] = useState(0)

    useEffect(() => {
        setSlideLock({
            a: false,
            b: false,
            c: false,
            d: false
        })
        setLockedHeight(0)
    }, []);

    useEffect(() => {
        setLockedHeight(0)
        var x = 0
        for (var key in slideLock){
          if(slideLock.hasOwnProperty(key)){
            if(slideLock[key]){
              x = x + gridNums[key]
            }
          }
        } 
        setLockedHeight(x)
    }, [slideLock, lockedHeight]);


    const changeTitle = (x) => {
        if (x !== gridNums.a) {
            let diff = x - gridNums.a;
            let compSum = (slideLock.b ? 0 : gridNums.b) + ( slideLock.c ? 0 : gridNums.c )  + (slideLock.d ? 0 : gridNums.d);
            let gdiff = (slideLock.b ? gridNums.b : gridNums.b - (gridNums.b / compSum) * diff);
            let xdiff = (slideLock.c ? gridNums.c : gridNums.c - (gridNums.c / compSum) * diff);
            let sdiff = (slideLock.d ? gridNums.d : gridNums.d - (gridNums.d / compSum) * diff);
            setGridNums({ ...gridNums, a: x, b: gdiff, c: xdiff, d: sdiff });
        }
    };
    
    const changeGraph = (x) => {
    if (x !== gridNums.b) {
        let diff = x - gridNums.b;
        let compSum = ( slideLock.a ? 0 : gridNums.a ) + ( slideLock.c ? 0 : gridNums.c )  + (slideLock.d ? 0 : gridNums.d);
        let tdiff = (slideLock.a ? gridNums.a : gridNums.a - (gridNums.a / compSum) * diff);
        let xdiff = (slideLock.c ? gridNums.c : gridNums.c - (gridNums.c / compSum) * diff);
        let sdiff = (slideLock.d ? gridNums.d : gridNums.d - (gridNums.d / compSum) * diff);
        setGridNums({ ...gridNums, a: tdiff, b: x, c: xdiff, d: sdiff });
    }
    };

    const changeXaxis = (x) => {
    if (x !== gridNums.c) {
        let diff = x - gridNums.c;
        let compSum = (slideLock.b ? 0 : gridNums.b) + (slideLock.a ? 0 : gridNums.a) + (slideLock.d ? 0 : gridNums.d);
        let gdiff = (slideLock.b ? gridNums.b : gridNums.b - (gridNums.b / compSum) * diff);
        let tdiff = (slideLock.a ? gridNums.a : gridNums.a - (gridNums.a / compSum) * diff);
        let sdiff = (slideLock.d ? gridNums.d : gridNums.d - (gridNums.d / compSum) * diff);
        setGridNums({ ...gridNums, a: tdiff, b: gdiff, c: x, d: sdiff });
    }
    };

    const changeSource = (x) => {
    if (x !== gridNums.d) {
        let diff = x - gridNums.d;
        let compSum = (slideLock.b ? 0 : gridNums.b) + ( slideLock.c ? 0 : gridNums.c ) + (slideLock.a ? 0 : gridNums.a);
        let gdiff = (slideLock.b ? gridNums.b : gridNums.b - (gridNums.b / compSum) * diff);
        let xdiff = (slideLock.c ? gridNums.c : gridNums.c - (gridNums.c / compSum) * diff);
        let tdiff = (slideLock.a ? gridNums.a : gridNums.a - (gridNums.a / compSum) * diff);
        setGridNums({ ...gridNums, a: tdiff, b: gdiff, c: xdiff, d: x });
    }
    };


    

    return (
        <div>
            <div className="slide-obj">
                <div className="slide-row">
                    <span className="txt-group">
                        <p className="slider-tag">Title Height</p>
                        <div className="input-group">
                            <input type="number" className="input-num" value={gridNums.a} onChange={(e) => {if(isNaN(parseInt(e.target.value))){changeTitle(gridNums.a)}else if(e.target.value<=100){changeTitle(parseInt(e.target.value))} }} min={0} max={100} disabled={slideLock.a}/>
                            <p className='percent'>%</p>
                        </div>
                    </span>
                    <button className={`grid-toggle ${slideLock.a ? '' : 'toggle-down'}`} onClick={() => setSlideLock({...slideLock, a: !slideLock.a})}>
                        { slideLock.a ?
                        <i className="fas fa-lock"></i>
                        :
                        <i className="fas fa-unlock"></i>  
                        }
                    </button>
                </div>
                <Slider
                className="slider"
                axis="x"
                xstep={1}
                xmin={0}
                xmax={100-lockedHeight}
                disabled={slideLock.a}
                x={gridNums.a}
                onChange={({ x }) => changeTitle(x)}
                styles={{track: {background: 'none', boxShadow: 'inset .15rem .15rem 6px #586c8a7e, inset -.25rem -.25rem 9px #ffffff'}, active: { background: 'linear-gradient(90deg, #C7E8E8 0%, #83DBD6 86.69%)', boxShadow: '-4px 4px 12px #83DBD6'}}}
                />
            </div>
            <div className="slide-obj">
                <div className="slide-row">
                    <span className="txt-group">
                        <p className="slider-tag">Graph Height</p>
                        <div className="input-group">
                            <input type="number" className="input-num" value={gridNums.b} onChange={(e) => { if(isNaN(parseInt(e.target.value))){changeGraph(gridNums.b)}else if(e.target.value<=100){changeGraph(parseInt(e.target.value))}}} min={0} max={100} disabled={slideLock.b}/>
                            <p className='percent'>%</p>
                        </div>
                    </span>
                    <button className={`grid-toggle ${slideLock.b ? '' : 'toggle-down'}`} onClick={() => setSlideLock({...slideLock, b: !slideLock.b})}>
                        { slideLock.b ?
                        <i className="fas fa-lock"></i>
                        :
                        <i className="fas fa-unlock"></i>  
                        }
                    </button>
                </div>
                <Slider
                className="slider"
                axis="x"
                xstep={1}
                xmin={0}
                xmax={100-lockedHeight}
                disabled={slideLock.b}
                x={gridNums.b}
                onChange={({ x }) => changeGraph(x)}
                styles={{track: {background: 'none', boxShadow: 'inset .15rem .15rem 6px #586c8a7e, inset -.25rem -.25rem 9px #ffffff'}, active: { background: 'linear-gradient(90deg, #C7E8E8 0%, #83DBD6 86.69%)', boxShadow: '-4px 4px 12px #83DBD6'}}}
                />
            </div>
            <div className="slide-obj">
                <div className="slide-row">
                    <span className="txt-group">
                        <p className="slider-tag">X-Axis Height</p>
                        <div className="input-group">
                            <input type="number" className="input-num" value={gridNums.c} onChange={(e) => { if(isNaN(parseInt(e.target.value))){changeXaxis(gridNums.c)}else if(e.target.value<=100){changeXaxis(parseInt(e.target.value))}}} min={0} max={100} disabled={slideLock.c}/>
                            <p className='percent'>%</p>
                        </div>
                    </span>
                    <button className={`grid-toggle ${slideLock.c ? '' : 'toggle-down'}`} onClick={() => setSlideLock({...slideLock, c: !slideLock.c})}>
                        { slideLock.c ?
                        <i className="fas fa-lock"></i>
                        :
                        <i className="fas fa-unlock"></i>  
                        }
                    </button>
                </div>
                <Slider
                className="slider"
                axis="x"
                xstep={1}
                xmin={0}
                xmax={100-lockedHeight}
                disabled={slideLock.c}
                x={gridNums.c}
                onChange={({ x }) => changeXaxis(x)}
                styles={{track: {background: 'none', boxShadow: 'inset .15rem .15rem 6px #586c8a7e, inset -.25rem -.25rem 9px #ffffff'}, active: { background: 'linear-gradient(90deg, #C7E8E8 0%, #83DBD6 86.69%)', boxShadow: '-4px 4px 12px #83DBD6'}}}
                />
            </div>
            <div className="slide-obj">
                <div className="slide-row">
                    <span className="txt-group">
                        <p className="slider-tag">Source Height</p>
                        <div className="input-group">
                            <input type="number" className="input-num" value={gridNums.d} onChange={(e) => {if(isNaN(parseInt(e.target.value))){changeSource(gridNums.d)}else if(e.target.value<=100){changeSource(parseInt(e.target.value))}}} min={0} max={100} disabled={slideLock.d}/>
                            <p className='percent'>%</p>
                        </div>
                    </span>
                    <button className={`grid-toggle ${slideLock.d ? '' : 'toggle-down'}`} onClick={() => setSlideLock({...slideLock, d: !slideLock.d})}>
                        { slideLock.d ?
                        <i className="fas fa-lock"></i>
                        :
                        <i className="fas fa-unlock"></i>  
                        }
                    </button>
                </div>
                <Slider
                className="slider"
                axis="x"
                xstep={1}
                xmin={0}
                xmax={100-lockedHeight}
                disabled={slideLock.d}
                x={gridNums.d}
                onChange={({ x }) => changeSource(x)}
                styles={{track: {background: 'none', boxShadow: 'inset .15rem .15rem 6px #586c8a7e, inset -.25rem -.25rem 9px #ffffff'}, active: { background: 'linear-gradient(90deg, #C7E8E8 0%, #83DBD6 86.69%)', boxShadow: '-4px 4px 12px #83DBD6'}}}
                />
            </div>
        </div>
    )
}

export default BasicRow
