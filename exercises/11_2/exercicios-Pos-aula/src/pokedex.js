/*
Você vai implementar de forma simplificada uma Pokedex!! Para os que não estão familiarizados com o universo Pokemon, 
a Pokedex é uma enciclopédia de todos os pokemons na natureza. Para o seu caso, 
a sua aplicação precisa mostrar todos os pokemons presentes no arquivo data.js mencionado acima.

Pokedex: esse componente representa a enciclopédia de pokemons. Esse componente recebe como entrada uma lista 
de pokemons para serem mostrados na tela. Para cada um desses pokemons recebidos, Pokedex chama o componente Pokemon.

*/
import Pokemon from './pokemon';
import pokemons from './data';
import React from 'react';
import './App.css';


class Pokedex extends React.Component {
  render() {
    //const { user, product, price } = this.props.order;

    return (
      <div className="container">
        <div className="pokedexTable">
          <div className='pokedexTable top'>
            <h1>Pokedex</h1>
            </div>
          {pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon}/>)}
        </div>
      </div>
    );
  }
}

export default Pokedex;
