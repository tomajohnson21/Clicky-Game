import React, { Component } from 'react';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import Wrapper from './components/Wrapper';
import Card from './components/Card'
import Footer from './components/Footer'
import cards from './cards.json'

class App extends Component {
  
  state = {
    currentScore: 0,
    highScore: 0,
    cards
  }



  handleStateChange = event => {

    let {name, value} = event.target;

    this.setState({
      [name]: value
    })
  }

  handleCardClick = id => {
  
    console.log(id)
  }

  componentDidMount() {


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
        <Wrapper>
          {this.state.cards.map(card =>
            <Card 
              id={card.id}
              key={card.id}
              name={card.name}
              src={card.image}
              handleCardClick={this.handleCardClick}
            />)}
        </Wrapper>
      </div>
    )
  }
}

export default App;
