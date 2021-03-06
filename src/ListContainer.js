import React, { Component } from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';
import TotalSpend from './TotalSpend';
import ListRowTitles from './ListRowTitles';
import AddListRow from './AddListRow';

const ChristmasListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 800px;

  .ChristmasListContainer-addButton {
    width: 100px;
    align-self: flex-start;
  }
`;

const defaultItemState = {
  name: '',
  planned: 0,
  spent: 0,
  done: false
};

class ListContainer extends Component {
  state = {
    items: {
      1: defaultItemState
    },
    totalSpend: 0
  };

  // componentDidMount() {
  //   let localStoragePeopleRef = localStorage.getItem('people');
  //   if (localStoragePeopleRef) {
  //     this.setState({
  //       items: JSON.parse(localStoragePeopleRef)
  //     });
  //     return;
  //   }
  // }

  // componentDidUpdate() {
  //   localStorage.setItem('people', JSON.stringify(this.state.items));
  // }

  handleTotalSpendChange = e => {
    e.preventDefault();
    e.persist();
    this.setState(prev => {
      return {
        ...prev,
        totalSpend: parseFloat(e.target.value).toFixed(2)
      };
    });
  };

  handleInputChange = (e, id) => {
    e.preventDefault();
    e.persist();
    const updatedItem = {
      ...this.state.items[id],
      [e.target.name]: e.target.value
    };
    this.setState(prev => {
      return {
        ...prev,
        items: {
          ...prev.items,
          [id]: updatedItem
        }
      };
    });
  };

  handleAddClick = e => {
    e.preventDefault();
    const id = uniqid();
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
    const totalPlanned = Object.keys(this.state.items).reduce((prev, key) => {
      return prev + Math.abs(this.state.items[key].planned);
    }, 0);

    const leftToSpend = this.state.totalSpend - totalPlanned;
    return (
      <ChristmasListContainer>
        <TotalSpend
          item={this.state.totalSpend}
          onChange={this.handleTotalSpendChange}
        />
        <p>
          Total left to spend: ${parseFloat(leftToSpend.toString()).toFixed(2)}
        </p>
        <ListRowTitles />
        {Object.keys(this.state.items).map(id => {
          return (
            <AddListRow
              key={id}
              id={id}
              item={this.state.items[id]}
              onChange={this.handleInputChange}
            />
          );
        })}
        <button
          className="ChristmasListContainer-addButton"
          type="submit"
          onClick={this.handleAddClick}
        >
          + Add Person
        </button>
      </ChristmasListContainer>
    );
  }
}

export default ListContainer;
