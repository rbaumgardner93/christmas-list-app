import React, { Component } from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';
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

  handleAddGift = e => {
    e.preventDefault();
    const numberGifts = uniqid();
    this.setState(prev => {
      return {
        giftIdeas: {
          ...prev.giftIdeas,
          [numberGifts]: {
            value: ''
          }
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

  handleRemoveGift = (e, giftIndex) => {
    e.preventDefault();
    const updatedStateItem = Object.keys({ ...this.state.giftIdeas });
    if (updatedStateItem.length > 1) {
      updatedStateItem.splice(giftIndex, 1);
    }
    this.setState({
      giftIdeas: updatedStateItem
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
          {Object.keys(this.state.giftIdeas).map((idea, index) => {
            return (
              <GiftIdeas
                key={idea}
                idea={idea}
                onChange={this.handleGiftInputChange}
                onClick={this.handleRemoveGift}
                index={index}
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
