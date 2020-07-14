/*
Você vai implementar de forma simplificada uma Pokedex!! Para os que não estão familiarizados com o universo Pokemon, 
a Pokedex é uma enciclopédia de todos os pokemons na natureza. Para o seu caso, 
a sua aplicação precisa mostrar todos os pokemons presentes no arquivo data.js mencionado acima.

Pokedex: esse componente representa a enciclopédia de pokemons. Esse componente recebe como entrada uma lista 
de pokemons para serem mostrados na tela. Para cada um desses pokemons recebidos, Pokedex chama o componente Pokemon.

*/
import Pokemon from './pokemon';
import pokemons from './data';
import React, { Component } from 'react';
import './App.css';

const pokemon= {
        id: 25,
        name: "Pikachu",
        type: 'Electric',
        averageWeight: {
            value: "6.0",
            measurementUnit: ''
        },
        image: "https:\/\/cdn.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png",
        moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)"
      }

class Botao extends React.Component{
  render () {
  return (<button onClick={this.props.onClick}>{this.props.btn}</button>);
  }
}

class Texto extends Component{
  render () {
    return(<div>Oi, como vai? Você clicou no {this.props.text}</div>);
  }
}
class Pokedex extends React.Component {
  constructor(props){
    super(props);

    this.state = {
       type: 'All'

      // pokemon: {
      //   id: 25,
      //   name: "Pikachu",
      //   type: 'Electric',
      //   averageWeight: {
      //       value: "6.0",
      //       measurementUnit: ''
      //   },
      //   image: "https:\/\/cdn.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png",
      //   moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)"
      // }
      
    }
  }

  filtraPorTipo = type => this.setState(type);
  render() {
    console.log(this.state)

   const botoes = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon', 'All']
    return (
      <div className="container">
        <Texto text={this.state.type}/> 
          <br />
        {botoes.map(type =>(<Botao onClick={() =>  this.filtraPorTipo({type})}key={type} btn={type}/>)
        )}
        <div className="pokedexTable">
          <div className='pokedexTable top'>
            <h1>Pokedex</h1>
            
          </div>
          { pokemons.filter(poke => 
          this.state.type === 'All' ? true : poke.type === this.state.type)
          .map(pokemon => <Pokemon classe ={''} key={pokemon.id} pokemon={pokemon}/>)}
          
        
        </div>
      </div>
    );
  }
}

export default Pokedex;
