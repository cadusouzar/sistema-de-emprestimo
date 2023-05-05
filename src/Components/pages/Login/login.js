import React from "react";
import { useState } from "react";
import Input from "../../../Objects/Input/input";
import Submit from "../../../Objects/Submit/submit";
import './login.css';
import { useNavigate } from "react-router-dom";

function Login(){

  const [usuario, setUsuario] = useState([])
  const navigate = useNavigate()

  function handleChange(e){
    setUsuario({
      ...usuario, [e.target.name]: e.target.value
    })
  }

  const goToHome = () => {
    navigate('/home')
  }

  return(
    <form className="form_login">
      <div className="container_login">
        <Input 
        name="login" 
        placeholder="Insira seu login" 
        type="text"
        text="Login"
        handleChange={handleChange}
        />

        <Input 
        name="senha"
        placeholder="Insira sua senha" 
        type="password"
        text="Senha"
        handleChange={handleChange}
        />
        
        <Submit text="Entrar" to={goToHome}/>
      </div>
    </form>
  )
}

export default Login