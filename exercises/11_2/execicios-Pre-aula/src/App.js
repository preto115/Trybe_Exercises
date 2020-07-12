import React from 'react';
import './App.css';
import Gretting from './exemplos-pre-aula.jsx'
import Image from './Image'
import UserProfile from './UserProfile';
import Order from './Order';

class AppOrder extends React.Component {
  render() {
    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };

    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    };
    const orders = [headphone, energyDrink];

    return (
      <div className="App">
        <h1> Orders recently created </h1>
         {/*  o componente AppOrder é pai de Order */}
         {orders.map(order => <Order key={order.id} order={order} />)} 
          {/*  nessa confusa situacao: 1º e 3º order sao parametros da funcao map() e o 2º order é um atributo JSX de  */}

      </div>
    );
  }
}

class AppClass extends React.Component {
  render() {
    const joao = {
      id: 102,
      name: "João",
      email: "joao@gmail.com",
      avatar: "https:\/\/cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
    };

    const amelia = {
      id: 77,
      name: "Amélia",
      email: "amelia@gmail.com",
      avatar: "https:\/\/cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    };

    const users = [joao, amelia]
    return (
      <div className="App">
        {users.map(user => <UserProfile key={user.id} user={user} />)}
      </div>
    );
  }
}

function AppFunction() {
  return (
    <div className="App">
      <Gretting.Greeting name='Elisângelo' lastName='Alves'/> {/* componentes de classes: react entende como sendo uma tag personalizada e renderiza dentro do DOM  */}
     {/* <Gretting.greeting name='Elisângelo' lastName='Alves'/>*/}  {/* componentes de funcoes: react nao entende como sendo uma tag personalizada e nao renderiza dentro do DOM  */}
      <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText='Cute cat staring' />
      <p>{Gretting.greeting('Elisangelo', 'Alves Ferreira')}</p> {/* codigo javaScript pode ser injetado dentro pelo react quando colocado entre '{}' renderiza dentro do DOM  */}
    </div>

  );
}


export default { AppFunction, AppClass, AppOrder };
