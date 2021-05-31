import React, { useState } from 'react'

let gridAreas =  [
    {val: 'title', option: 'Title'},
    {val: 'source', option: 'Source'},
    {val: 'xAxis', option: 'X-Axis'},
    {val: 'yAxis', option: 'Y-Axis'},
    {val: 'graph', option: 'Graph'},
]

function Grid({gridNums, selection}) {

    const [gridAreas, setGridAreas] = useState([
        {val: 'title', option: 'Title'},
        {val: 'source', option: 'Source'},
        {val: 'xAxis', option: 'X-Axis'},
        {val: 'yAxis', option: 'Y-Axis'},
        {val: 'graph', option: 'Graph'},
    ])

    function templateColumns(){

    }

    function gridElements(){
        switch(selection){
            case 'b':
                return (
                    gridAreas.map(area => (
                        <div className={`${area.val}`} id={`${area.val}`}>{area.option}</div>
                    ))
                )
            case 'r':
                let rGridAreas = [...gridAreas]
                rGridAreas.push({val: 'xAxisT', option: 'Top X-Axis'})
                return (
                    rGridAreas.map(area => (
                        <div className={`${area.val}`} id={`${area.val}`}>{area.option}</div>
                    ))
                )
            case 'c':
                let cGridAreas = [...gridAreas]
                cGridAreas.push({val: 'points', option: 'Points'})
                return (
                    cGridAreas.map((area) => (
                        <div className={`${area.val}`} id={`${area.val}`}>{area.option}</div>
                    ))
                )
            default:
                break;
        }
        //let r = {val: 'xAxisT', option: 'Top X-Axis'}
    }

    return (
        <div className={selection === 'b' ? 'grid' : selection === 'r' ? 'grid-extraRow' : 'grid-extraCol'} id="grid"
            style={{
                gridTemplateRows: selection === 'r' ?
                                    `${gridNums.a}% ${gridNums.g}% ${gridNums.b}% ${gridNums.c}% ${gridNums.d}%`
                                    :
                                    `${gridNums.a}% ${gridNums.b}% ${gridNums.c}% ${gridNums.d}%`
                                    ,
                gridTemplateColumns: selection === 'c' ?
                                        `${gridNums.e}% ${gridNums.f}% ${gridNums.g}%`
                                    :
                                        `${gridNums.e}% ${gridNums.f}%`,
            }}
            >
            {gridElements()}
        </div>
    )
}

export default Grid
