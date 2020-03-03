import React from 'react';

import styled from 'styled-components';


const StyledCard = styled.div`
  height: 20rem;
  width: 15rem;
  background-color: palevioletred;
  border-radius: 3px;
  box-shadow: .5rem .5rem 1rem #888888;
  padding: 2rem;
  color: black;
`;

const Card = (props) => {
  return (
    <StyledCard>
      Hello World!
    </StyledCard>

  );
}

export default Card;