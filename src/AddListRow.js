import React, { Component } from 'react';
import styled from 'styled-components';

const AddListRowForm = styled.form`
  display: flex;
  justify-content: space-evenly;
`;

class AddListRow extends Component {
  nameRef = React.createRef();
  plannedRef = React.createRef();
  spentRef = React.createRef();
  giftRef = React.createRef();

  addListRow = e => {
    e.preventDefault();
    const listRowItems = {
      nameRef: this.nameRef.current.value,
      plannedRef: parseFloat(this.plannedRef.current.value),
      spentRef: parseFloat(this.spentRef.current.value),
      giftRef: this.giftRef.current.value
    };
    this.props.addListRow(listRowItems);
    e.currentTarget.reset();
  };

  render() {
    return (
      <AddListRowForm onSubmit={this.addListRow}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input
          name="planned"
          ref={this.plannedRef}
          type="text"
          placeholder="$"
        />
        <input name="spent" ref={this.spentRef} type="text" placeholder="$" />
        <input
          name="gift"
          ref={this.giftRef}
          type="text"
          placeholder="Gift Ideas"
        />
        <input type="checkbox" />
        <button type="submit">+ Add Person</button>
      </AddListRowForm>
    );
  }
}

export default AddListRow;
