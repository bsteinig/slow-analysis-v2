import React, { useState } from 'react'
import Field from '../Assets/field'
import '../Styles/form.css'

function Form({options, content, setContent, setGenerated}) {

    const [genForm, setGenForm] = useState(false)

    function genF(){
        if(!genForm){ setGenForm(true); setGenerated(true) }
        document.getElementById('form').scrollIntoView()        
    }

    return (
        <div className="form-comp" id="form">
            <button className="form-gen" onClick={() => {genF()}}>Generate Form</button>
            {genForm ?
            <ul className="form-container">
                {options.map((option, index) => (
                <Field id={index} options={options}  content={content} setContent={setContent}/>
                ))}
            </ul>
            :
            <></>
            }
        </div>
    )
}

export default Form
