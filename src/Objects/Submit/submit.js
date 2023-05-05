import React from "react";
import './submit.css'

function Submit({text, to, type}){
  return(
    <div className="button">
      <button type={type} onClick={to}>{text}</button>
    </div>
  )
}

export default Submit