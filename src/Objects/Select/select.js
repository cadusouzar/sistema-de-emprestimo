import React from "react"
import './select.css'

function Select({text, name, options, placeholder, handleOnChange, value}){
    return (
        <div className="containerSelect">
            <label className="label" htmlFor={name}>{text}:</label>
            <select 
            step="0.01" 
            min="0.01"
            className="label"
            name={name} 
            onChange={handleOnChange}
            value={value || ''}
            id={name}>
                <option>{placeholder}</option>
                {options.map((option) => (
                  <option value={option.id} key={option.id}>
                    {option.nome}
                  </option>
                ))}
            </select>
        </div>
    )
}

export default Select