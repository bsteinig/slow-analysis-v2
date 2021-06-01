import React, { useState, useEffect } from 'react'
import Field from '../Assets/field'
import '../Styles/form.css'

function Form({options, content, setContent, setGenerated}) {

    
     let optionsList = [...options,{val: 'grid', option: 'Full Graph'}]


    const [genForm, setGenForm] = useState(false)

    function genF(){
        if(!genForm){ setGenForm(true); setGenerated(true); }
        document.getElementById('form').scrollIntoView()        
    }

    return (
        <div className="form-comp" id="form">
            <button className="form-gen" onClick={() => {genF()}}>Generate Form</button>
            {genForm ?
            <ul className="form-container">
                {optionsList.map((option, index) => (
                <Field id={index} options={optionsList}  content={content} setContent={setContent}/>
                ))}
            </ul>
            :
            <></>
            }
        </div>
    )
}

export default Form
