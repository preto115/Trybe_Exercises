/* 
Você pode usar a imaginação para estilizar a sua aplicação. Entretanto, 
é obrigatório que você implemente pelo menos estes dois componentes:
*/

/*
nome do pokemon;

tipo do pokemon;

peso médio do pokemon, acompanhado da unidade de medida usada;

imagem do pokemon
*/
import React from 'react'
import ImagePokemon from './ImagePokemon';
import './App.css';



class Pokemon extends React.Component {
  
  render() {
   
    const {name , type, averageWeight, image, moreInfo} = this.props.pokemon;
    const {value, measurementUnit = 'Kg'} = averageWeight;
    return (
      <div className={`pokemonCard ${this.props.classe}`}>
        <div className='creatureInfo'>
          <h1> {name} </h1>
          <h2> {type} </h2>
          <h5> Average weigth: {value} {measurementUnit} </h5>
        </div>
        <ImagePokemon source={image} alternativeText={`Creature avatar: ${name}`} info={moreInfo} />      
      </div>
    );
  }
}
// ReactDOM.render(
//     <Pokemon />,
//   document.getElementById('root')
// );
//console.log(Pokemon(pokemon))

export default Pokemon;
