import React from 'react'
import '../Styles/sidebar.css'
import logo from '../Images/logo512.png'

function Sidebar({setComp, selection}) {

    return (
        <div className="sidebar-container">
            <div className="logo-card">
                <img className="logo" src={logo} alt="logo"/>
            </div>
            <div className="options">
                <button className={`option ${selection === 'b' ? 'selected' : ''}`} value='b' onClick={setComp}>Basic</button>
                <button className={`option ${selection === 'r' ? 'selected' : ''}`} value='r' onClick={setComp}>Extra Row</button>
                <button className={`option ${selection === 'c' ? 'selected' : ''}`} value='c' onClick={setComp}>Extra Col</button>
                <button className={`option ${selection === 'e' ? 'selected' : ''}`} value='e' onClick={setComp}>Custom</button>
            </div>
            
        </div>
    )
}

export default Sidebar

