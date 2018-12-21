import React, { Component } from 'react';
import styled from 'styled-components';
import GiftIdeas from './GiftIdeas';

const AddListRowForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  input {
    max-height: 20px;
  }

  input[type='checkbox'] {
    margin-right: 1rem;
  }
`;

class AddListRow extends Component {
  state = {
    giftIdeas: {
      1: {
        value: ''
      }
    }
  };

  handleAddGift = (e, idea) => {
    e.preventDefault();
    const numberGifts = Object.keys(this.state.giftIdeas).length + 1;
    this.setState(prev => {
      return {
        giftIdeas: {
          ...prev.giftIdeas,
          [numberGifts]: ''
        }
      };
    });
  };

  handleGiftInputChange = (e, idea) => {
    e.preventDefault();
    e.persist();
    const updatedGiftIdea = {
      ...this.state.giftIdeas[idea],
      value: e.target.value
    };
    this.setState(prev => {
      return {
        giftIdeas: {
          ...prev.giftIdeas,
          [idea]: updatedGiftIdea
        }
      };
    });
  };

  render() {
    return (
      <AddListRowForm onSubmit={this.props.onSubmit}>
        <input
          name="name"
          placeholder="Name"
          type="text"
          value={this.props.item.name}
          onChange={e => this.props.onChange(e, this.props.id)}
        />
        <input
          name="planned"
          placeholder="$"
          type="number"
          min="0"
          value={
            !isNaN(this.props.item.planned.value)
              ? (this.props.item.planed.value = 0)
              : this.props.item.planned.value
          }
          onChange={e => this.props.onChange(e, this.props.id)}
        />
        <input
          name="spent"
          placeholder="$"
          type="number"
          min="0"
          value={this.props.item.spent.value}
          onChange={e => this.props.onChange(e, this.props.id)}
        />
        <div className="AddListRow-giftColumn">
          {Object.keys(this.state.giftIdeas).map(idea => {
            console.log(idea);
            return (
              <GiftIdeas
                key={idea}
                idea={idea}
                onClick={this.handleAddGift}
                onChange={this.handleGiftInputChange}
              />
            );
          })}
          <button onClick={this.handleAddGift} className="GiftIdeas-addButton">
            + Add
          </button>
        </div>
        <input type="checkbox" />
      </AddListRowForm>
    );
  }
}

export default AddListRow;
