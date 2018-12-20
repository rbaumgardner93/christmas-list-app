import React from 'react';
import styled from 'styled-components';

const Gifts = styled.div`

  input {
    width: 150px;
  }

  .GiftIdeas-addButton {
    width: 50px;
    margin-left: 1rem;
  }
`;

const GiftIdeas = ({onClick, value}) => {
  return (
    <Gifts>
        <input
        name="gift"
        placeholder="Gift Ideas"
        type="text"
        value={value}
      />
      <button onClick={e => onClick(e)} className="GiftIdeas-addButton">+ Add</button>
    </Gifts>
  );
}

export default GiftIdeas;
