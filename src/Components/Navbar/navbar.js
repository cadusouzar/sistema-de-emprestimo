import React from "react";
import LinkLogo from "../../Objects/LinkLogo/LinkLogo";
import logo from '../../images/icone.png'
import './navbar.css'
import LinkNavBar from "../../Objects/LinkNavbar/LinkNavbar";

function NavBar(){
  return (
    <nav>
      <LinkLogo to="/home" src={logo} alt="Logo"/>
      <ul className="lista">
        <LinkNavBar to="/novoEmprestimo" text="Novo Empréstimo"/>
        <LinkNavBar to="/emprestimos" text="Meus empréstimos"/>
        <LinkNavBar to="/trocarSenha" text="Trocar senha"/>
      </ul>
    </nav>
  )
}

export default NavBar