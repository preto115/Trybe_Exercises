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

const pokemon = {
  id: 25,
  name: "Pikachu",
  type: 'Electric',
  averageWeight: {
      value: "6.0",
      measurementUnit: ''
  },
  image: "https:\/\/cdn.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png",
  moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)"
};

class Pokemon extends React.Component {
  
  render() {
   
    const {name , type, averageWeight, image, moreInfo} = this.props.pokemon;
    const {value, measurementUnit = 'Kg'} = averageWeight;
    return (
      <div className="pokemonCard">
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
