import React from 'react';
import {cloneDeep, remove} from 'lodash';
import './App.css';

import Player from './Player'
import Holes from './Holes'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        {name: "Bartek", holesWon: [], scores: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0}},
        {name: "Monika", holesWon: [], scores: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0}}
      ]
    }
  }

  setHoleWon(hole, newState) {
    remove(newState.players[0].holesWon, n => parseInt(n) === parseInt(hole))
    remove(newState.players[1].holesWon, n => parseInt(n) === parseInt(hole))
    if(newState.players[0].scores[hole] > newState.players[1].scores[hole]) {
      if(!newState.players[1].holesWon.includes(hole)) {
        newState.players[1].holesWon.push(hole)
      }
    }
    if(newState.players[0].scores[hole] < newState.players[1].scores[hole]) {
      if(!newState.players[0].holesWon.includes(hole)) {
        newState.players[0].holesWon.push(hole)
      }
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
    this.setHoleWon(hole, newState)
    this.setState(newState)
  }

  decrementPlayerScore(index, hole) {
    let newState = cloneDeep(this.state)
    if(newState.players[index].scores[hole] === 0) {
      return
    }
    newState.players[index].scores[hole] -= 1
    this.setHoleWon(hole, newState)
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
