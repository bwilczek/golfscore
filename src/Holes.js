import React from 'react';
import { Button } from 'react-bootstrap'

export default class Holes extends React.Component {
  render() {
    return (
      <span style={{paddingRight: '16px'}}>
        <Button disabled={true}>#</Button>
        <br /><br />
        <Button style={{margin: '2px'}} size="sm">1</Button><br />
        <Button style={{margin: '2px'}} size="sm">2</Button><br />
        <Button style={{margin: '2px'}} size="sm">3</Button><br />
        <Button style={{margin: '2px'}} size="sm">4</Button><br />
        <Button style={{margin: '2px'}} size="sm">5</Button><br />
        <Button style={{margin: '2px'}} size="sm">6</Button><br />
        <Button style={{margin: '2px'}} size="sm">7</Button><br />
        <Button style={{margin: '2px'}} size="sm">8</Button><br />
        <Button style={{margin: '2px'}} size="sm">9</Button><br />
        stroke<br />
        match
      </span>
    );
  }
}
