import React from "react";
import './saudacao.css'
import Dinheiro from '../../images/dinheiro-caindo.png'
import ContainerMiddle from "../ContainerMiddle/containerMiddle";

function Saudacao({nome}){
  return(
    <ContainerMiddle customClass="container_saudacao">
      <h1>
        Bem-vindo <span>{nome}</span>
      </h1>
      <p>Comece a gerencias seus empréstimos agora mesmo!</p>
      <img src={Dinheiro} alt="Dinheiro caindo"/>
    </ContainerMiddle>
  )
}

export default Saudacao