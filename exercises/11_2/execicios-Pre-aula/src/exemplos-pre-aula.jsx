import React from 'react';

class Greeting extends React.Component {
  render() {
    return (<h1>Hello, {this.props.name} {this.props.lastName}</h1>);
  }
}

function greeting(name, lastName){
  return `Hello, ${name} ${lastName}`;
}
console.log(greeting('Elisangelo', 'Alves Ferreira'));

export default {Greeting, greeting} ;