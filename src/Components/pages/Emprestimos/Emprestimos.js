import React, { useEffect, useState } from "react";
import './Emprestimos.css'
import NavBar from '../../Navbar/navbar'
import CardProjeto from '../../CardProjeto/cardProjeto'

function Emprestimos(){

  const [emprestimos, setEmprestimos] = useState({})

  useEffect (() => {
    fetch("http://localhost:5000/emprestimosFeitos", {
      method: "GET",
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then((data) => {
      setEmprestimos(data)
    })
    .catch(err => console.log(err))
  })

  return(
    <>
      <NavBar/>
      <h1 className="emprestimosRealizados">Emprestimos Realizados</h1>
      <div className="containerEmprestimos">
        {emprestimos.length > 0 &&
        emprestimos.map((emprestimo) => 
          <CardProjeto nomeCredor={emprestimo.credor.name} valor={emprestimo.valor} dataEmprestimo={emprestimo.dataEmprestimo} />
        )
        }
      </div>
    </>
  )
}

export default Emprestimos