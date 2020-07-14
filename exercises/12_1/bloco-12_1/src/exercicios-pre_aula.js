import React, { Component } from 'react';
import './App.css';

class Botao extends React.Component{
  render () {
  return (<button onClick={() => this.props.handleClick(this.props.btn)}>{this.props.btn}</button>);
  }
}

class Texto extends Component{
  render () {
    return(<span>Oi, como vai? Você clicou no {this.props.text}</span>);
  }
}

class Pre_Aula extends Component {
  constructor(props){
    super(props);

    this.state = {
      texto: 'teste',
      outroTexto: 'botao'
    }
  }

  mudaEstado = texto => this.setState({texto});

  render() {
    console.log(this.state)

    return (
      <div className="App App-header">
      
        <Texto text={this.state.texto}/>
        <Botao handleClick={this.mudaEstado} btn='botao 1'/>
        <Botao handleClick={this.mudaEstado} btn='botao 2'/>
        <Botao handleClick={this.mudaEstado} btn='botao 3'/>
        <Botao handleClick={this.mudaEstado} btn='botao 4'/>
        
      </div>
    );
  }
}

export default Pre_Aula;
