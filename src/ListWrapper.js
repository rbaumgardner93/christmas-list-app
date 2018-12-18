import React, { Component } from 'react';
import styled from 'styled-components';
import ChristmasList from './ChristmasList';
import TotalSpend from './TotalSpend';
import ListRowTitles from './ListRowTitles';
import AddListRow from './AddListRow';

const List = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 800px;
`;

class ListWrapper extends Component {
  render() {
    return (
      <List>
        <TotalSpend />
        <ListRowTitles />
        <ChristmasList listItems={this.props.addListRow} />
        <AddListRow addListRow={this.props.addListRow} />
        <div>
          {Object.keys(this.props.listItems).map(item => {
            return <p>{item}</p>;
          })}
        </div>
      </List>
    );
  }
}

export default ListWrapper;
