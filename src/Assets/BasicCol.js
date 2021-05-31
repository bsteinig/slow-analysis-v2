import React from 'react'
import Slider from 'react-input-slider'
import '../Styles/slider.css'

function BasicCol({gridNums, setGridNums}) {

    const changeYaxis = (x) => {
        let diff = x - gridNums.e;
        setGridNums({ ...gridNums, e: x, f: gridNums.f - diff });
    };

    return (
        <div>
            <div className="spacer"></div>
            <div className="slide-obj">
                <div className="slide-row">
                    <span className="txt-group">
                        <p className="slider-tag">Y-Axis Width</p>
                        <div className="input-group">
                            <input type="number" className="input-num" value={gridNums.e} onChange={(e) => {if(isNaN(parseInt(e.target.value))){changeYaxis(gridNums.e)}else if(e.target.value<=100){changeYaxis(parseInt(e.target.value))} }} min={0} max={100}/>
                            <p className='percent'>%</p>
                        </div>
                    </span>
                </div>
                <Slider
                className="slider"
                axis="x"
                xstep={1}
                xmin={0}
                xmax={100}
                x={gridNums.e}
                onChange={({ x }) => changeYaxis(x)}
                styles={{track: {background: 'none', boxShadow: 'inset .15rem .15rem 6px #586c8a7e, inset -.25rem -.25rem 9px #ffffff'}, active: { background: 'linear-gradient(90deg, #C7E8E8 0%, #83DBD6 86.69%)', boxShadow: '-4px 4px 12px #83DBD6'}}}
                />
            </div>
        </div>
    )
}

export default BasicCol
