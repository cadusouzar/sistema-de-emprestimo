import React from "react";
import './containerMiddle.css'

function ContainerMiddle({children, customClass}){
  return(
    <div className={`container ${customClass}`}>
      {children}
    </div>
  )
}

export default ContainerMiddle