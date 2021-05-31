import React from 'react'
import '../Styles/form.css'

function Field({id, options, content, setContent}) {

    let selectList = options.map((item, i) => {
        return (
          <option key={i} value={item.val}>{item.option}</option>
        )
    });

    const updateField = (e) => {
        let items = [...content]
        let item = {...items[id]}
        item[e.target.name] = e.target.value
        items[id] = item
        setContent(items)
    }   

    return (
        <li key={id} className="form-item">
            <label className="form-label">Shown Graph Component</label>
            <select className="form-input" name="comp" id="comp" onChange={(e) => updateField(e)} required>
                <option value="" disabled selected>Select option</option>
                {selectList}
            </select>
            <label className="form-label">Section Title:</label>
            <input className="form-input" name="title" type="text" onChange={(e) => updateField(e)} required></input>
            <label className="form-label">Section Content:</label>
            <textarea className="form-input textarea" name="info" type="text" onChange={(e) => updateField(e)} required/>
        </li>
  );
}

export default Field;