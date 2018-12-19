import React, { Component } from 'react';
import styled from 'styled-components';

const Titles = styled.div`
  display: flex;
  justify-content: space-between;

  h3:not(:last-of-type) {
    display: flex;
    justify-content: center;
    max-width: 135px;
    width: 100%;
  }

  h3:nth-child(4n) {
    padding-left: 1rem;
  }
`;

class ListRowTitles extends Component {
  render() {
    return (
      <Titles>
        <h3>Name</h3>
        <h3>Planned</h3>
        <h3>Spent</h3>
        <h3>Gift Ideas</h3>
        <h3>Done</h3>
      </Titles>
    );
  }
}

export default ListRowTitles;
