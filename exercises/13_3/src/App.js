// arquivo App.js, criado pelo create-react-app, modificado
import React, { Component } from 'react';
import Home from './exercicios-pos-aula/parte1/Home';
import { BrowserRouter, Link, Switch } from 'react-router-dom';
import About from './exercicios-pos-aula/parte1/About';
import Users from './exercicios-pos-aula/parte1/Users';
import { Route } from 'react-router-dom';


class App extends Component {
  render() {
    const num = ['10 ', '11 ', '100']
    return (
      <BrowserRouter>
      <header>
        <Link to="/">HOME</Link>
        <Link to="/about"> ABOUT</Link>
        <Link to="/users"> USERS</Link>
      </header>
      <Switch>
          <Route  exact path="/" component={Home}></Route>
          <Route  path="/about" component={About}></Route>

          <Route  path="/users/:id" component={Users}></Route>
          <Route  path="/users" render={ (props) => <Users  {...props} greetingMessage={'Good Morning'} pag={num} />}></Route> 
      </Switch>     
      </BrowserRouter>
    );
  }
}

export default App;
