import React from 'react';
import styled from 'styled-components';

const Gift = styled.div`
  input {
    width: 150px;
    padding: 5px;
    margin-bottom: 0.5rem;
  }

  .GiftIdea-remove {
    margin-left: 0.5rem;
  }
`;

const GiftIdea = ({ onChange, onClick, value, id, isRemoveDisabled }) => {
  return (
    <Gift>
      <input
        name="gift"
        placeholder="Gift Idea"
        type="text"
        onChange={e => onChange(e, id)}
        value={value}
      />
      <button
        onClick={e => onClick(e, id)}
        className="GiftIdea-remove"
        disabled={isRemoveDisabled}
      >
        Remove
      </button>
    </Gift>
  );
};

export default GiftIdea;
