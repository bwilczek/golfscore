import React from 'react';

export default class Player extends React.Component {
  render() {
    return (
      <span>
        {this.props.player.name}
        <hr />
        {Object.keys(this.props.player.scores).map(hole => <div onClick={e => this.props.incrementScore(hole)}>{hole}: {this.props.player.scores[hole]}</div>)}
      </span>
    );
  }
}
