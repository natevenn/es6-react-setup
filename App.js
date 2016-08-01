import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super(); // super gives us context for this in our component
    this.state = { txt: '' }
    this.update = this.update.bind(this)
  }

  update(e) {
    this.setState({txt: e.target.value})
  }

  render() {
    return (
      <div>
        <Widget txt={this.state.txt} update={this.update} />
      </div>
      );
  }
}

const Widget = (props) => {
  return (
    <div>
      <input type="text" onChange={props.update} />
      <h1>{props.txt}</h1>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App
