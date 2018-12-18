import React, { Component } from 'react';
import Heading from './Heading';
import ListWrapper from './ListWrapper';

import './App.css';

class App extends Component {
  state = {
    listRows: [
      {
        name: ''
      }
    ],
    christmasList: {}
  };

  addListRow = row => {
    const listRows = { ...this.state.listRows };
    listRows[`row${Date.now()}`] = row;
    console.log(listRows);
    this.setState({
      listRows
    });
  };

  render() {
    return (
      <div className="App">
        <Heading />
        <ListWrapper
          addListRow={this.addListRow}
          listItems={this.state.listRows}
        />
      </div>
    );
  }
}

export default App;
