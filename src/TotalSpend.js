import React, { Component } from 'react';
import styled from 'styled-components';

const Spend = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`;

class TotalSpend extends Component {
  render() {
    return (
      <Spend>
        <h3>How Much Do You Want to Spend?</h3>
        <input type="text" placeholder="$" />
      </Spend>
    );
  }
}

export default TotalSpend;
