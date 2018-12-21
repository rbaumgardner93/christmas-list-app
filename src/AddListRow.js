import React, { Component } from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';
import GiftIdea from './GiftIdea';

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
  constructor(props) {
    super(props);

    this.state = {
      [props.id]: {
        giftIdeas: {
          [uniqid()]: ''
        }
      }
    };
  }


  // componentDidMount() {
  //   let localStorageRef = localStorage.getItem('gifts');
  //   if (localStorageRef) {
  //     this.setState({
  //       [this.props.id]: {
  //         giftIdeas: JSON.parse(localStorageRef)
  //       }
  //     });
  //     return;
  //   }
  // }

  // componentDidUpdate(prevState) {
  //   localStorage.setItem('gifts', JSON.stringify({...prevState.giftIdeas, [this.props.id]: this.state.giftIdeas}));
  // }

  componentDidUpdate() {
    const prevState = {...this.props.state}
    console.log({[this.props.id]: this.state.giftIdeas})
    localStorage.setItem('gifts', JSON.stringify(this.state[this.props.id].giftIdeas))
  }

  handleAddGift = e => {
    e.preventDefault();
    const giftId = uniqid();
    this.setState(prev => {
      return {
        [this.props.id]: {
          giftIdeas: {
            ...prev[this.props.id].giftIdeas,
            [giftId]: ''
          }
        }
      };
    });
  };

  handleGiftInputChange = (e, idea) => {
    e.preventDefault();
    e.persist();
    // const updatedGiftIdea = {
    //   ...this.state.giftIdeas[idea],
    //   value: e.target.value
    // };
    this.setState(prev => {
      return {
        [this.props.id]: {
          giftIdeas: {
            ...prev[this.props.id].giftIdeas,
            [idea]: e.target.value
          }
        }
      };
    });
  };

  handleRemoveGift = (e, id) => {
    e.preventDefault();
    const clonedState = { ...this.state[this.props.id].giftIdeas };
    delete clonedState[id]
    this.setState({
      [this.props.id]: {
        giftIdeas: clonedState
      }
    });
  };

  render() {
    const giftIds = Object.keys(this.state[this.props.id].giftIdeas);
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
          {giftIds.map((id) => {
            return (
              <GiftIdea
                key={id}
                id={id}
                value={this.state[this.props.id].giftIdeas[id]}
                onChange={this.handleGiftInputChange}
                onClick={this.handleRemoveGift}
                isRemoveDisabled={giftIds.length <= 1}
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
