import React from "react";
import './TrocarSenha.css'
import NavBar from '../../Navbar/navbar'
import Input from '../../../Objects/Input/input'
import Submit from '../../../Objects/Submit/submit'
import ContainerMiddle from '../../../Objects/ContainerMiddle/containerMiddle'

function TrocarSenha(){
  return(
  <>
    <NavBar/>
    <ContainerMiddle customClass="container_senha">
      <Input
      text="Nova senha"
      placeholder="Digite a nova senha desejada"
      name="novaSenha"
      type="password"
      />

      <Input
      text="Repita a senha"
      placeholder="Repita a nova senha desejada"
      name="repetirSenha"
      type="password"
      />

      <Submit
      text="Trocar senha"
      />
    </ContainerMiddle>
  </>
  )
}

export default TrocarSenha