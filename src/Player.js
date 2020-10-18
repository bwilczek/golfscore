import React from 'react';
import { Button } from 'react-bootstrap'
import { sum } from 'lodash'

import HoleScore from './HoleScore'

export default class Player extends React.Component {
  promptRename() {
    let newName = prompt('New player name:')
    this.props.setName(newName)
  }

  render() {
    let totalScore = sum(Object.values(this.props.player.scores))
    let holesWon = this.props.player.holesWon.length

    return (
      <span style={{margin: '10px'}}>
        <Button style={{width: '100%'}} onClick={this.promptRename.bind(this)}>{this.props.player.name}</Button>
        <br /><br />
        {Object.keys(this.props.player.scores).map(hole => <HoleScore holeWon={this.props.player.holesWon.includes(hole)} key={hole} hole={hole} score={this.props.player.scores[hole]} increment={() => this.props.incrementScore(hole)} decrement={() => this.props.decrementScore(hole)} />)}
        {totalScore}<br />
        {holesWon}
      </span>
    );
  }
}
