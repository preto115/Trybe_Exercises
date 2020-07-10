import React from 'react';
import './App.css';
import CardList from './cardList';

function Card(props) {
  return (
    <div className="col-sm-4">
      <div className="card">
        <img className="card-img-top" src= {props.featureImage} alt={props.title} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href={props.link} className="btn btn-primary">Learn more</a>
        </div>
      </div>
    </div>
  );
}

function List() {
return (
  <div className="row">
          {CardList.map(card => Card(card))}
  </div>
);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <List/>
      </header>
    </div>
  );
}

export default App;
