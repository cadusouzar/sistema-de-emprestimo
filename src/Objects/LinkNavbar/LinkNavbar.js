import React from "react";
import { Link } from "react-router-dom";
import './LinkNavbar.css'

function LinkNavBar({to, text}){
  return( 
    <li className="item">
      <Link to={to}>{text}</Link>
    </li>
  )
}

export default LinkNavBar