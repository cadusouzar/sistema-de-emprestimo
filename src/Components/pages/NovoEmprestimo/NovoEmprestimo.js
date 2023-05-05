import React from "react";
import NavBar from '../../Navbar/navbar'
import FormularioEmprestimo from "../../FormularioEmprestimo/formularioEmprestimo";
import { useNavigate } from "react-router-dom";


function NovoEmprestimo(){

  const navigate = useNavigate()

  function createPost(emprestimos){
    emprestimos.solicitacao = true;
    
    fetch("http://localhost:5000/emprestimosFeitos", {
      method: "POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emprestimos)
    }) 
    .then(resp => resp.json())
    .then((data) => {
      navigate('/Emprestimos', {message: 'Emprestimo solicitado!'})
    })
    .catch(err => console.log(err)) 
  }


  return(
    <>
      <NavBar/>
      <FormularioEmprestimo handleSubmit={createPost}/>
    </>
  )
}

export default NovoEmprestimo