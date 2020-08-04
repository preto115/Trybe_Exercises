import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

export class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
    };
  }

  componentDidMount(){
  }

  componentDidUpdate(previousState, nextState){
  }

  handleInput(e) {
    const { name, value } = e.target;
    console.log(e.target.placeholder);
    console.log(name, value);
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h1>Você está na página Sobre</h1>
        <p>
          Nome:
          <input
            placeholder="Digite seu nome"
            data-testid='input-nome'
            onChange={(e) => this.handleInput(e)}
            name='nome'
            value={this.state.nome}
          />
        </p>
        <p>
          E-mail:
          <input
            placeholder="Digite seu email"
            data-testid='input-email'
            onChange={(e) => this.handleInput(e)}
            name='email'
            value={this.state.email}
          />
        </p>
      </div>
    );
  }
}

export const Home = () => <h1>Você está na página Início</h1>;
export const NoMatch = () => <h1>Página não encontrada</h1>;

export default function Testando_react() {
  return (
    <div>
      <Link to="/">Início</Link>
      <Link to="/about">Sobre</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};
