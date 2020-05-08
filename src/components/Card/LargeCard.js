// This file describes another card style component that should only be displayed when 
// a card has been selected. A maximum of one of these components shoudld be active 
// at a given time.

import styled, { keyframes } from 'styled-components';
import React from 'react';

//A mapping of colors based on pokemon type
import {typeColors} from './Card';



const slide_in = keyframes`

  100% {
    
    transform: translate(95%, 30%);
  }
`;

const slide_out = keyframes`
  0% {
    transform: translate(95%, 30%);
  }

  100% {
    transform: translateX(-100%);
  }
`;

const StyledLargeCard = styled.div`
  display: flex;
  width: 50rem;
  height: 50rem;
  background-color: pink;
  border-radius: 3px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, -50%);
  opacity: ${props => props.animation ? 100 : 0};
  transition: opacity 1s;
  /* animation: ${slide_in} 0.5s forwards; */
  /* animation-name: ${props => props.animation ? slide_in : slide_out};
  animation-duration: 0.5s;
  animation-direction: forwards; */


  /* Add a transition so that the card slides in with an ease-in animation */
`;

const LargeCard = (props) => {
  console.log('Animation setting is set to ', props.animation);
  return (
  <StyledLargeCard animation={props.animation}>{props.data}</StyledLargeCard>
  );
}

export default LargeCard;