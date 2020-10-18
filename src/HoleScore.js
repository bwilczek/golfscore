import React from 'react';
import { Button } from 'react-bootstrap'

export default class HoleScore extends React.Component {
  render() {
    const color = this.props.holeWon ? '#4c4' : '#fff'
    const fontWeight = this.props.holeWon ? 'bold' : 'normal'
    return (
      <div style={{color: color, fontWeight: fontWeight}}>
        {this.props.score}&nbsp;&nbsp;
        <Button style={{margin: '2px', width: '30px'}} size="sm" disabled={this.props.score < 1} onClick={this.props.decrement}>-</Button>
        <Button style={{margin: '2px', width: '30px'}} size="sm" onClick={this.props.increment}>+</Button>
      </div>
    );
  }
}
