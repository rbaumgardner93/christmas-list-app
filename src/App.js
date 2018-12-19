import React, { Component } from 'react';
import Heading from './Heading';
import ListContainer from './ListContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <ListContainer />
      </div>
    );
  }
}

export default App;
