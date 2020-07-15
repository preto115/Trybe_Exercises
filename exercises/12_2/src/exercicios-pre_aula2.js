import React from 'react';
import ReactDOM from 'react-dom';


class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // change code below this line
  this.handleChange = this.handleChange.bind(this)
  }
  
    // change code above this line
  componentDidMount() {
    document.addEventListener('onchange', () => this.handleChange);
  }
  componentWillUnmount() {
    document.removeEventListener('onchange', this.handleChange);
  }
  // change code below this line
handleChange(event){
this.setState({input: event.target.value});
}
  // change code above this line

  render(){ 
    return (
      <div>
        <form onChange = {this.handleChange.bind(this)}>
        { /* change code below this line */}
        {/* onChange = {this.handleChange.bind(this)} */}
        <input  type="text" name="entrada" ref="entrada" value={this.state.input}/>
        </form>
        { /* change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
  }
  ReactDOM.render(<ControlledInput />, document.getElementById('root2'));

  export default ControlledInput;