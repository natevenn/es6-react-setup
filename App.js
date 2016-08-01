import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    }
    this.update = this.update.bind(this)
  }

  update(e) {
    this.setState ({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
    });
  }

  render() {
    return (
      <div>
        <Slider ref='red' update={this.update} />
        {'Red: ' + this.state.red}
        <br/>
        <Slider ref='green' update={this.update} />
        {'Green: ' + this.state.green}
        <br/>
        <Slider ref='blue' update={this.update} />
        {'Blue: ' + this.state.blue}
      </div>
    )
  }
}

class Slider extends React.Component {
  render() {
    return (
      <div>
        <input ref='inp' type="range"
          min='0'
          max='255'
          onChange={this.props.update} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
export default App



// how to access children components
//class App extends React.Component {
  //render() {
    //return <Button> I <Heart /> React</Button>
  //}
//}

//class Button extends React.Component {
  //render() {
    //return <button>{this.props.children}</button>
  //}
//}

//const Heart = () => <span className="glyphicon glyphicon-heart"></span>
