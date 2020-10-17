import React from 'react';
import {cloneDeep} from 'lodash';
import './App.css';

import Player from './Player'
import Holes from './Holes'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        {name: "Bartek", scores: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0}},
        {name: "Monika", scores: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0}}
      ]
    }
  }

  setPlayerName(index, newName) {
    let newState = cloneDeep(this.state)
    newState.players[index].name = newName
    this.setState(newState)
  }

  incrementPlayerScore(index, hole) {
    let newState = cloneDeep(this.state)
    newState.players[index].scores[hole] += 1
    this.setState(newState)
  }

  decrementPlayerScore(index, hole) {
    let newState = cloneDeep(this.state)
    newState.players[index].scores[hole] -= 1
    this.setState(newState)
  }

  render() {
    return (
      <div className="App">
        <Holes />
        {this.state.players.map((p, i) => <Player key={i} player={p} setName={this.setPlayerName.bind(this, i)} incrementScore={this.incrementPlayerScore.bind(this, i)} decrementScore={this.decrementPlayerScore.bind(this, i)} />)}
      </div>
    );
  }
}
