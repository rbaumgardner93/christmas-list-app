import React from 'react';
import styled from 'styled-components';

const AddListRowForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  input[type='checkbox'] {
    margin-right: 1rem;
  }
`;

const AddListRow = ({ id, item, onChange, onSubmit }) => {
  return (
    <AddListRowForm onSubmit={onSubmit}>
      <input
        name="name"
        placeholder="Name"
        type="text"
        value={item.name}
        onChange={e => onChange(e, id)}
      />
      <input
        name="planned"
        placeholder="$"
        type="number"
        value={item.planned}
        onChange={e => onChange(e, id)}
      />
      <input
        name="spent"
        placeholder="$"
        type="number"
        value={item.spent}
        onChange={e => onChange(e, id)}
      />
      <input
        name="gift"
        placeholder="Gift Ideas"
        type="text"
        onChange={e => onChange(e, id)}
      />
      <input type="checkbox" />
    </AddListRowForm>
  );
};

export default AddListRow;
