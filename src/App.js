import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';


import Login from './Components/pages/Login/login';
import Home from './Components/pages/Home/home'
import Emprestimos from './Components/pages/Emprestimos/Emprestimos'
import NovoEmprestimo from './Components/pages/NovoEmprestimo/NovoEmprestimo'
import TrocarSenha from './Components/pages/TrocarSenha/TrocarSenha'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/Home" element={<Home/>}/>
        <Route exact path="/NovoEmprestimo" element={<NovoEmprestimo/>}/>
        <Route exact path="/Emprestimos" element={<Emprestimos/>}/>
        <Route exact path="/TrocarSenha" element={<TrocarSenha/>}/>
      </Routes>
    </Router>
  );
}

export default App;
