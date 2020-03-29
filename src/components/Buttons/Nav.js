import React from 'react';
import styled from 'styled-components';


const StyledNav = styled.nav`
  grid-area: nav;
  display: flex;
  height: fit-content;
  background-color: pink;
  align-self: center;
  justify-self: center;

`;

const Arrow = styled.a`
  text-decoration: none;
  cursor: pointer;
`;


const Nav = ({direction}) => {
  return(
    <StyledNav>
      <Arrow href={'#'}>&larr;</Arrow>
      <Arrow href={'#'}>&rarr;</Arrow>
    </StyledNav>
  )
};

export default Nav;