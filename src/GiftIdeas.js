import React from 'react';
import styled from 'styled-components';

const Gifts = styled.div`
  input {
    width: 150px;
    padding: 5px;
    margin-bottom: 0.5rem;
  }

  .GiftIdea-remove {
    margin-left: 0.5rem;
  }
`;

const GiftIdeas = ({ onChange, onClick, idea, index }) => {
  return (
    <Gifts>
      <input
        name="gift"
        placeholder="Gift Ideas"
        type="text"
        onChange={e => onChange(e, idea)}
        value={idea.value}
      />
      <button
        key={idea}
        onClick={e => onClick(e, index)}
        className="GiftIdea-remove"
      >
        Remove
      </button>
    </Gifts>
  );
};

export default GiftIdeas;
