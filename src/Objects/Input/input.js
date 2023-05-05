import React from "react";
import './input.css'

function Input({name, text, type, placeholder, value, handleOnChange}){
  return(
      <label htmlFor={name} className="label">{text}:
      <input 
      className="input label"
      name={name}
      type={type} 
      placeholder={placeholder} 
      id={name}
      value={value}
      onChange={handleOnChange}
      />
      </label>
  )
}

export default Input