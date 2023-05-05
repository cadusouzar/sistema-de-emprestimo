import React from "react";
import './home.css'

import NavBar from '../../Navbar/navbar'
import Saudacao from "../../../Objects/Saudacao/saudacao";

function Home(){
  return(
    <>
      <NavBar/>
      <Saudacao nome="Carlos Eduardo"/>
    </>
  )
}

export default Home