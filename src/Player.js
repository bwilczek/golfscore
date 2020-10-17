import React from 'react';
import { Button } from 'react-bootstrap'
import { sum } from 'lodash'

import HoleScore from './HoleScore'

export default class Player extends React.Component {
  promptRename() {
    alert('Player renaming is not implemented yet')
  }

  render() {
    let totalScore = sum(Object.values(this.props.player.scores))

    return (
      <span style={{margin: '10px'}}>
        <Button onClick={this.promptRename}>{this.props.player.name}</Button>
        <br /><br />
        {Object.keys(this.props.player.scores).map(hole => <HoleScore key={hole} hole={hole} score={this.props.player.scores[hole]} increment={() => this.props.incrementScore(hole)} decrement={() => this.props.decrementScore(hole)} />)}
        {totalScore}
      </span>
    );
  }
}
