// This file describes another card style component that should only be displayed when 
// a card has been selected. A maximum of one of these components shoudld be active 
// at a given time.

import styled from 'styled-components';
import React from 'react';

//A mapping of colors based on pokemon type
import {typeColors} from './Card';



const StyledLargeCard = styled.div`
  display: flex;
  width: 50rem;
  height: 50rem;
  background-color: pink;
  border-radius: 3px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* Add a transition so that the card slides in with an ease-in animation */
`;

const LargeCard = (props) => {
  return (
  <StyledLargeCard>{props.data}</StyledLargeCard>
  );
}

export default LargeCard;