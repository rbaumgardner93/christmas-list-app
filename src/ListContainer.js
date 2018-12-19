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
  spent: 0.0,
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
    let totalSpend = this.state.totalSpend;
    totalSpend = e.target.value;
    this.setState(prev => {
      return {
        items: {
          ...prev.items
        },
        totalSpend
      };
    });
  };

  handleInputChange = (e, id) => {
    e.preventDefault();
    const originalItem = { ...this.state.items[id] };
    originalItem[e.target.name] = e.target.value;
    this.setState(prev => {
      return {
        items: {
          ...prev.items,
          [id]: originalItem
        }
      };
    });
  };

  handleAddClick = e => {
    e.preventDefault();
    const id = Object.keys(this.state.items).length + 1;
    this.setState(prev => {
      return {
        items: {
          ...prev.items,
          [id]: defaultItemState
        }
      };
    });
  };

  render() {
    return (
      <ChristmasListContainer>
        <TotalSpend
          item={this.state.totalSpend}
          onChange={this.handleTotalSpendChange}
        />
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
