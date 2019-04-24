import React, { Component } from 'react';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import Wrapper from './components/Wrapper';
import Card from './components/Card'
import shuffle from './components/shuffle'
import cards from './cards.json'

class App extends Component {
  
  state = {
    currentScore: 0,
    highScore: 0,
    cards
  }

  newGame = () => {

    this.setState({currentScore: 0, cards: shuffle(cards)})
  }

  handleStateChange = event => {

    let {name, value} = event.target;

    this.setState({
      [name]: value
    })
  }

  handleCardClick = id => {
    let selectedIndex = this.state.cards.findIndex(card => card.id === id);


    if(this.state.cards[selectedIndex].clicked){
      alert("You have already clicked this card! Game over!");
      this.newGame();
    } else {
      
      let score = this.state.currentScore + 1;
      if(score > this.state.highScore){
        this.setState({highScore: score})
      }

      this.state.cards[selectedIndex].clicked = true
      this.setState({currentScore: score})
    }

    if(this.state.currentScore >= 11){

      alert("You've reached the maximum points, you win!");
      this.newGame();
    } else {

      this.setState({cards: shuffle(cards)});
    }
  }

  componentDidMount() {

    this.newGame();
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
