import React, { Component } from 'react';
import styled from 'styled-components';

const Gifts = styled.div`
  padding: 1rem;

  input {
    width: 200px;
  }
`;

class GiftIdeas extends Component {
  render() {
    return (
      <Gifts>
        <input type="text" placeholder="Gift Idea" />
      </Gifts>
    );
  }
}

export default GiftIdeas;
