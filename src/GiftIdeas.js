import React from 'react';
import styled from 'styled-components';

const Gifts = styled.div`
  input {
    width: 150px;
    padding: 5px;
    margin-bottom: 0.5rem;
  }

  .GiftIdeas-addButton {
    width: 50px;
    margin-left: 1rem;
  }
`;

const GiftIdeas = ({ onChange, onClick, idea }) => {
  return (
    <Gifts>
      <input
        name="gift"
        placeholder="Gift Ideas"
        type="text"
        onChange={e => onChange(e, idea)}
        value={idea.value}
      />
    </Gifts>
  );
};

export default GiftIdeas;
