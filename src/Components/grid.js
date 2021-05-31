import React, { useState } from 'react'

function Grid({gridNums, selection, options}) {

    function gridElements(){
        return (
            options.map(area => (
                <div className={`${area.val}`} id={`${area.val}`}>{area.option}</div>
            ))
        )
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
