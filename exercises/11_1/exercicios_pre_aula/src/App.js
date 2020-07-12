import React from 'react';
import logo from './logo.svg';
import './App.css';
// import JSX from '../src/exercicios_pos_aula.js'
// import ReactDOM from 'react';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}
const agendaDoDia = ['acordar as 5:00 e fazer AF' , 'estudar o conteudo do dia', 'arrumar a casa e comer', 'Trybe de 14:00 as 20:00', 'dormir antes das 11:00']
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <ol>
        {agendaDoDia.map(tarefa => task(tarefa))}
        </ol>
        </div>
      <img src={logo} className="App-logo" alt="logo" />
      </header>
      
    </div>
  );
}

export default App;
