import React, { Component } from 'react';
import styled from 'styled-components';
import TotalSpend from './TotalSpend';
import ListRowTitles from './ListRowTitles';
import AddListRow from './AddListRow';

const ChristmasListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 800px;

  button {
    width: 100px;
    align-self: flex-start;
  }
`;

const defaultItemState = {
  name: '',
  planned: 0,
  spent: 0,
  giftIdeas: '',
  done: false
};

class ListContainer extends Component {
  state = {
    items: {
      1: defaultItemState
    },
    totalSpend: 0
  };

  handleTotalSpendChange = e => {
    e.preventDefault();
    e.persist();
    this.setState(prev => {
      return {
        ...prev,
        totalSpend: parseInt(e.target.value, 10)
      };
    });
  };

  handleInputChange = (e, id) => {
    e.preventDefault();
    e.persist();
    const updatedItem = { ...this.state.items[id], [e.target.name]: parseInt(e.target.value, 10) };
    this.setState(prev => {
      return {
        ...prev,
        items: {
          ...prev.items,
          [id]: updatedItem
        },
      };
    });
  };

  handleAddClick = e => {
    e.preventDefault();
    const id = Object.keys(this.state.items).length + 1;
    this.setState(prev => {
      return {
        ...prev,
        items: {
          ...prev.items,
          [id]: defaultItemState
        }
      };
    });
  };

  render() {
    const totalPlanned = Object.keys(this.state.items).reduce((prev, key) =>  {
      console.log('NaN:',!isNaN(Math.abs(this.state.items[key].planned)))
      console.log('key:',Math.abs(this.state.items[key].planned))
      console.log('prev:', prev)
      return prev + Math.abs(this.state.items[key].planned);
    }, 0);
    const leftToSpend = this.state.totalSpend - totalPlanned;
    return (
      <ChristmasListContainer>
        <TotalSpend
          item={this.state.totalSpend}
          onChange={this.handleTotalSpendChange}
        />
        {leftToSpend}
        <ListRowTitles />
        {Object.keys(this.state.items).map(id => {
          return (
            <AddListRow
              key={id}
              id={id}
              item={this.state.items[id]}
              onChange={this.handleInputChange}
              onSubmit={this.handleAddClick}
            />
          );
        })}
        <button onClick={this.handleAddClick} type="submit">
          + Add Person
        </button>
      </ChristmasListContainer>
    );
  }
}

export default ListContainer;
