import React from "react";
import './cardProjeto.css'
import {format} from 'date-fns';

function CardProjeto({nomeCredor, dataEmprestimo, valor}){
  const dataFormatada = format(new Date(dataEmprestimo), 'dd/MM/yyyy')

  return(
    <div className="Emprestimos">
      <p>Credor do Empréstimo: <br/>{nomeCredor}</p>
      <p>Empréstimo feito em: <br/>{dataFormatada}</p>
      <p>Valor: <br/>R$ {valor}</p>
    </div>
  )
}

export default CardProjeto