import React from "react"
import { Link } from "react-router-dom"
import './LinkLogo.css'

function LinkLogo({to, src, alt}){
  return(
    <Link to={to}>
      <img src={src} alt={alt}/>
    </Link>
  )
}

export default LinkLogo

