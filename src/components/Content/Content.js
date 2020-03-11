import styled from 'styled-components';
import React from 'react';

import Card from '../Card/Card';

const StyledContent = styled.main`
  grid-area: content;
  background-color: black;
  display: grid;

  grid-template-columns: auto auto auto auto;

`;

const Content = (props) => {
  return (
    <StyledContent>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/> 
    </StyledContent>
  )
};

export default Content;