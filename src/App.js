import React from 'react';
import './App.css';

import Counter from './Counter'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        Hello golfer :)
        <Counter />
      </div>
    );
  }
}
