import React, { useState, useEffect } from 'react'
import Slider from 'react-input-slider'
import '../Styles/slider.css'


function Col({gridNums, setGridNums}) {

    const [xLock, setXLock] = useState({
        e: false,
        f: false,
        g: false,
    })
    const [lockedWidth, setLockedWidth] = useState(0)

    useEffect(() => {
        setXLock({
            e: false,
            f: false,
            g: false,
        })
        setLockedWidth(0)
    }, []);

    useEffect(() => {
        var y = 0
        for (var key in xLock){
            if(xLock.hasOwnProperty(key)){
              if(xLock[key]){
                console.log(gridNums[key])
                y = y + gridNums[key]
              }
            }
        }
        setLockedWidth(y)
    }, [xLock, lockedWidth])

    const changeYaxis = (x) => {
        if (x !== gridNums.e) {
            let diff = x - gridNums.e;
            let compSum = (xLock.f ? 0 : gridNums.f) + (xLock.g ? 0 : gridNums.g);
            //console.log(diff)
            let gdiff = (xLock.f ? gridNums.f : gridNums.f - (gridNums.f / compSum) * diff);
            let pdiff = (xLock.g ? gridNums.g : gridNums.g - (gridNums.g / compSum) * diff);
            //console.log(x,gdiff,xdiff,sdiff,(x+gdiff+xdiff+sdiff))
            setGridNums({ ...gridNums, f: gdiff, g: pdiff, e: x });
        }
      };
    
      const changeGraphWidth = (x) => {
        if (x !== gridNums.f) {
            let diff = x - gridNums.f;
            let compSum = (xLock.e ? 0 : gridNums.e) + (xLock.g ? 0 : gridNums.g);
            //console.log(diff)
            let ydiff = (xLock.e ? gridNums.e : gridNums.e - (gridNums.e / compSum) * diff);
            let pdiff = (xLock.g ? gridNums.g : gridNums.g - (gridNums.g / compSum) * diff);
            //console.log(x,gdiff,xdiff,sdiff,(x+gdiff+xdiff+sdiff))
            setGridNums({ ...gridNums, e: ydiff, g: pdiff, f: x });
        }
      }
    
      const changePoints = (x) => {
        if (x !== gridNums.g) {
            let diff = x - gridNums.g;
            let compSum = (xLock.e ? 0 : gridNums.e) + (xLock.f ? 0 : gridNums.f);
            //console.log(diff)
            let ydiff = (xLock.e ? gridNums.e : gridNums.e - (gridNums.e / compSum) * diff);
            let gdiff = (xLock.f ? gridNums.f : gridNums.f - (gridNums.f / compSum) * diff);
            //console.log(x,gdiff,xdiff,sdiff,(x+gdiff+xdiff+sdiff))
            setGridNums({ ...gridNums, e: ydiff, f: gdiff, g: x });
        }
      }    

    return (
        <div>
            <div className='spacer'/>
            <div className="slide-obj">
                <div className="slide-row">
                    <span className="txt-group">
                        <p className="slider-tag">Y-Axis Width</p>
                        <div className="input-group">
                            <input type="number" className="input-num" value={gridNums.e} onChange={(e) => {if(isNaN(parseInt(e.target.value))){changeYaxis(gridNums.e)}else if(e.target.value<=100){changeYaxis(parseInt(e.target.value))} }} min={0} max={100} disabled={xLock.e}/>
                            <p className='percent'>%</p>
                        </div>
                    </span>
                    <button className={`grid-toggle ${xLock.e ? '' : 'toggle-down'}`} onClick={() => setXLock({...xLock, e: !xLock.e})}>
                        { xLock.e ?
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
                xmax={100-lockedWidth}
                disabled={xLock.e}
                x={gridNums.e}
                onChange={({ x }) => changeYaxis(x)}
                styles={{track: {background: 'none', boxShadow: 'inset .15rem .15rem 6px #586c8a7e, inset -.25rem -.25rem 9px #ffffff'}, active: { background: 'linear-gradient(90deg, #C7E8E8 0%, #83DBD6 86.69%)', boxShadow: '-4px 4px 12px #83DBD6'}}}
                />
            </div>
            <div className="slide-obj">
                <div className="slide-row">
                    <span className="txt-group">
                        <p className="slider-tag">Graph Width</p>
                        <div className="input-group">
                            <input type="number" className="input-num" value={gridNums.f} onChange={(e) => {if(isNaN(parseInt(e.target.value))){changeGraphWidth(gridNums.f)}else if(e.target.value<=100){changeGraphWidth(parseInt(e.target.value))} }} min={0} max={100} disabled={xLock.f}/>
                            <p className='percent'>%</p>
                        </div>
                    </span>
                    <button className={`grid-toggle ${xLock.f ? '' : 'toggle-down'}`} onClick={() => setXLock({...xLock, f: !xLock.f})}>
                        { xLock.f ?
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
                xmax={100-lockedWidth}
                disabled={xLock.f}
                x={gridNums.f}
                onChange={({ x }) => changeGraphWidth(x)}
                styles={{track: {background: 'none', boxShadow: 'inset .15rem .15rem 6px #586c8a7e, inset -.25rem -.25rem 9px #ffffff'}, active: { background: 'linear-gradient(90deg, #C7E8E8 0%, #83DBD6 86.69%)', boxShadow: '-4px 4px 12px #83DBD6'}}}
                />
            </div>
            <div className="slide-obj">
                <div className="slide-row">
                    <span className="txt-group">
                        <p className="slider-tag">Points Width</p>
                        <div className="input-group">
                            <input type="number" className="input-num" value={gridNums.g} onChange={(e) => {if(isNaN(parseInt(e.target.value))){changePoints(gridNums.g)}else if(e.target.value<=100){changePoints(parseInt(e.target.value))} }} min={0} max={100} disabled={xLock.g}/>
                            <p className='percent'>%</p>
                        </div>
                    </span>
                    <button className={`grid-toggle ${xLock.g ? '' : 'toggle-down'}`} onClick={() => setXLock({...xLock, g: !xLock.g})}>
                        { xLock.g ?
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
                xmax={100-lockedWidth}
                disabled={xLock.g}
                x={gridNums.g}
                onChange={({ x }) => changePoints(x)}
                styles={{track: {background: 'none', boxShadow: 'inset .15rem .15rem 6px #586c8a7e, inset -.25rem -.25rem 9px #ffffff'}, active: { background: 'linear-gradient(90deg, #C7E8E8 0%, #83DBD6 86.69%)', boxShadow: '-4px 4px 12px #83DBD6'}}}
                />
            </div>
        </div>
    )
}

export default Col
