import styled from 'styled-components';
import React from 'react';

import Card from '../Card/Card';

const StyledContent = styled.main`
  grid-area: content;
  background-color: black;
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;


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
      <Card/>
    </StyledContent>
  )
};

export default Content;