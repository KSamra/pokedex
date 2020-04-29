// This file describes another card style component that should only be displayed when 
// a card has been selected. A maximum of one of these components shoudld be active 
// at a given time.

import styled from 'styled-components';
import React from 'react';

//A mapping of colors based on pokemon type
import {typeColors} from './Card';



const StyledLargeCard = styled.div`
  display: flex;
  max-width: 50rem;
  max-height: 50rem;
  background-color: whitesmoke;
  border-radius: 3px;
  flex-direction: column;
  align-items: center;
  

`;
 