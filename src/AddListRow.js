import React, {Component} from 'react';
import styled from 'styled-components';
import GiftIdeas from './GiftIdeas';

const AddListRowForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

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
  }

  handleAddGift = (e, idea) => {
    e.preventDefault();
    console.log(idea)
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
          value={!isNaN(this.props.item.planned.value) ? this.props.item.planed.value = 0 : this.props.item.planned.value}
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
        <GiftIdeas value={this.state.giftIdeas[1].value} />
        <input type="checkbox" />
      </AddListRowForm>
    );
  }
};

export default AddListRow;
