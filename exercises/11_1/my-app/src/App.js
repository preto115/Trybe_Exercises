import React from 'react';
import logo from './logo.svg';
import './App.css';
//import  Objeto from './exer_pos_aula-1_a_9-freecodecamp'
// import JSX from '../src/exercicios_pos_aula.js'
// import ReactDOM from 'react';
//--------------------------
const JSX = <h1>Hello JSX!</h1>;
//-------------------------------
const JSX1 = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// change code below this line
 // ReactDOM.render(JSX, document.getElementById('challenge-node'));
//-----------------------------------
const JSX2 = (<div>
  <h1>Meu primeiro App</h1>
  <p>Estou aprendendo React</p>
  <ul>
    <li>mais pratico</li>
    <li>menos coisas</li>
    <li>outra maneira de construir paginas WEB</li>
  </ul>

  </div>);
//-----------------------------------
  const JSX3 = (
    <div>
    {/*React is awnsome */}
      <h1>This is a block of JSX</h1>
      <p>Here's a subtitle</p>
    </div>
  );
//-----------------------------------
const JSX4 = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
//-----------------------------------
const JSX5 = (
  <div className='myDiv'>
    <h1>Add a class to this div</h1>
  </div>
);
//-----------------------------------
const JSX6 = (
  <div>
    
    <h2>Welcome to React!</h2> <br/>
    <p>Be sure to close all tags!</p>
    <hr/>
    remove comment and change code above this line
  </div>
);
//-----------------------------------
const MyComponent = () =>{
  return (
  <div>
    <h2>Let's Get started.</h2>
    <p>Oi, meu nome é Elisângelo!</p>
  </div>);
}
//-----------------------------------
class MyComponentClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // change code below this line
return( <div><h1>Hello React!</h1></div>);
    // change code above this line
  }
};
//-----------------------------------
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* change code below this line */ }
        <ChildComponent />
        { /* change code above this line */ }
      </div>
    );
  }
};
//-----------------------------------



const task = (value) => {
  return (
    <li>{value}</li>
  );
}
const agendaDoDia = ['acordar as 5:00 e fazer AF' , 'estudar o conteudo do dia', 'arrumar a casa e comer', 'Trybe de 14:00 as 20:00', 'dormir antes das 11:00']
function App() {
  return (
    <div className="App" >
      <header className="App-header">
      <img src={logo} className="App-logo col-sm-4" alt="logo" />
      </header>
      <div>
        <div className="row">
        <div className="col-sm-4">
          
        <p>Exercicio 2</p>
        {JSX1}
        <br/>
        <p>Exercicio 3</p>
        {JSX2}
        <p>lista ordenada:</p>
        <ol className>
        {agendaDoDia.map(tarefa => task(tarefa))}
        </ol>
        </div>
        <div className="col-sm-4">
        <p>Exercicio 1</p>
        {JSX}
        <br/>
        <p>Exercicio 3.1</p>
        {JSX3}
        <br/>
        <p>Exercicio 4</p>
        {JSX4}
        <br/>
        <p>Exercicio 5</p>
        {JSX5}
        </div>
        </div>        
        <br/>
        <br/>
        <div className="row">
        <div className="col-sm-4">
        <p>Exercicio 7</p>
        <MyComponent />
        <br/>
        <p>Exercicio 8</p>
        <MyComponentClass />
        <br/>
        </div>
        <div className="col-sm-4">
        <br/>
        <p>Exercicio 6</p>
        {JSX6}
        <p>Exercicio 9</p>
        <ParentComponent />
        </div>
        </div>
        
        </div>
      
    </div>
  );
}
//
export default App;
