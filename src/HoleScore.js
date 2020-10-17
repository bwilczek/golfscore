import React from 'react';
import { Button } from 'react-bootstrap'

export default class HoleScore extends React.Component {
  render() {
    return (
      <div>
        {this.props.score}&nbsp;&nbsp;
        <Button style={{margin: '2px', width: '30px'}} size="sm" onClick={this.props.decrement}>-</Button>
        <Button style={{margin: '2px', width: '30px'}} size="sm" onClick={this.props.increment}>+</Button>
      </div>
    );
  }
}
