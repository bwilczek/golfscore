import React from 'react';
import {cloneDeep, remove, sum} from 'lodash';
import './App.css';

import Player from './Player'
import Holes from './Holes'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState()
  }

  persistState() {
    localStorage.setItem('state', JSON.stringify(this.state))
  }

  initialState() {
    if(localStorage.state === undefined) {
      return {
        players: [
          {name: "Bartek", holesWon: [], leaderStroke: false, leaderMatch: false, scores: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0}},
          {name: "Monika", holesWon: [], leaderStroke: false, leaderMatch: false, scores: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0}}
        ]
      }
    }
    return JSON.parse(localStorage.state)
  }

  computeScore(hole, newState) {
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

    let strokeScore0 = sum(Object.values(newState.players[0].scores))
    let strokeScore1 = sum(Object.values(newState.players[1].scores))
    let matchScore0 = newState.players[0].holesWon.length
    let matchScore1 = newState.players[1].holesWon.length

    newState.players[0].leaderStroke = strokeScore0 < strokeScore1
    newState.players[1].leaderStroke = strokeScore1 < strokeScore0
    newState.players[0].leaderMatch = matchScore0 > matchScore1
    newState.players[1].leaderMatch = matchScore1 > matchScore0
  }

  setPlayerName(index, newName) {
    let newState = cloneDeep(this.state)
    newState.players[index].name = newName
    this.setState(newState, this.persistState)
  }

  incrementPlayerScore(index, hole) {
    let newState = cloneDeep(this.state)
    newState.players[index].scores[hole] += 1
    this.computeScore(hole, newState)
    this.setState(newState, this.persistState)
  }

  decrementPlayerScore(index, hole) {
    let newState = cloneDeep(this.state)
    if(newState.players[index].scores[hole] === 0) {
      return
    }
    newState.players[index].scores[hole] -= 1
    this.computeScore(hole, newState)
    this.setState(newState, this.persistState)
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
