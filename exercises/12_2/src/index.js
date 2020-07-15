import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Pokedex from './pokedex';
import MyComponent from './exercicios'
import ControlledInput from './exercicios-pre_aula2'

function App() {
  return (
    <div className="">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <ControlledInput />
      <MyComponent />
    </div>
  );
}

export default App;
