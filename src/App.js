import React, { Component } from 'react';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';

class App extends Component {
  
  state = {
    currentScore: 0,
    highScore: 0
  }

  handleStateChange = event => {

    const {name, value} = event.target;

    this.setState({
      [name]: value
    })
  }
  
  render() {
    return (
      <div>
        <Nav 
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
          handleStateChange={this.handleStateChange}
        />
        <Jumbotron />
      </div>
    )
  }
}

export default App;
