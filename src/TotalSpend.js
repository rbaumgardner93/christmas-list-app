import React from 'react';
import styled from 'styled-components';

const Spend = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`;

const TotalSpend = ({ item, onChange }) => {
  return (
    <Spend>
      <h3>How Much Do You Want to Spend?</h3>
      <input
        type="number"
        placeholder="$"
        min="0"
        onChange={e => onChange(e)}
        value={!isNaN(item.value) ? '' : item.value}
      />
    </Spend>
  );
};

export default TotalSpend;
