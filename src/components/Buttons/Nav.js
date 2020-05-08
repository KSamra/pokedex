import React from 'react';
import styled from 'styled-components';


const StyledNav = styled.nav`
  grid-area: nav;
  display: flex;
  height: fit-content;
  align-self: center;
  justify-self: space-between;

`;

const Arrow = styled.a`
  text-decoration: none;
  cursor: pointer;
  padding: 0 1rem;
  font-size: 2rem;
`;


const Nav = ({hasMore, loadNext}) => {
  return(
    <StyledNav>
      <Arrow href={'#'}>&larr;</Arrow>
      <Arrow  onClick={()=> loadNext()}>&rarr;</Arrow>
    </StyledNav>
  )
};

export default Nav;