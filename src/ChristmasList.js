import React from 'react';
import styled from 'styled-components';

const ChristmasListRow = styled.div`
  display: block;
`;

const ChristmasList = props => {
  return (
    <ChristmasListRow>
      <p>{props.listItems}</p>
    </ChristmasListRow>
  );
};

export default ChristmasList;
