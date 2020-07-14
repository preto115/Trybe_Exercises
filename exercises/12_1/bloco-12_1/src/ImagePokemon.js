import React from 'react';
import './App.css';

class Image extends React.Component {
  render() {
    return (
      <div className="avatarPokemon">
      <a className="button" href={this.props.info} target='blank'>More About it</a>
      <img src={this.props.source} alt={this.props.alternativeText} />
      </div>
    );
  }
}

export default Image;
