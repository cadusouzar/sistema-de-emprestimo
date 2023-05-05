import React, { useEffect, useState } from "react";
import './formularioEmprestimo.css'
import Select from "../../Objects/Select/select";
import Submit from "../../Objects/Submit/submit";
import Input from "../../Objects/Input/input";

function FormEmprestimo ({handleSubmit, projectData}){

  const [emprestimos, setEmprestimos] = useState(projectData || {})
  const [credores, setCredores] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/usuarios", {
      method: "GET",
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    .then(resp => resp.json())
    .then((data) => {
      setCredores(data)
    })
    .catch(err => console.log(err))
  }, [])

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(emprestimos)

  }

  function handleChange (e) {
    setEmprestimos({...emprestimos, [e.target.name]: e.target.value})
  }

  function handleSelect (e) {
    setEmprestimos({...emprestimos, credor: {
      id: e.target.value,
      name: e.target.options[e.target.selectedIndex].text
    }
    })
  }

  return(
    <>
      <form onSubmit={submit} className="containerSolicitarEmprestimo">
        <Input 
        text="Valor do empréstimo"
        type="number"
        placeholder="Digite o valor do empréstimo desejado"
        name="valor"
        handleOnChange={handleChange}
        />

        <Select
        text="Credor"
        placeholder="Escolha o credor"
        name="credor"
        handleOnChange={handleSelect}
        value={emprestimos.credor ? emprestimos.credor.id : ""}
        options={credores}
        />

        <Input
        text="Data do empréstimo"
        type="date"
        name="dataEmprestimo"
        handleOnChange={handleChange}
        />

        <Submit type="submit" text="Solicitar Empréstimo" options={credores}/>
      </form>

      <p className="mensagemJuros">Os juros calculados por dia serão (porcentagem) em cima do valor atual (valor) </p>
    </>
  )
}

export default FormEmprestimo

