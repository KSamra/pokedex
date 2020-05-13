import React from 'react';
import styled from 'styled-components';


const StyledNav = styled.nav`
  /* grid-area: nav; */
  display: flex;
  height: fit-content;
  align-self: center;
  justify-self: space-between;
  margin-bottom: 2rem;

`;

const Arrow = styled.a`
  text-decoration: none;
  cursor: pointer;
  padding: 0 1rem;
  font-size: 2rem;

`;


const Nav = ({hasMore, hasPrev, loadNext, loadPrev}) => {
  console.log('Has more = ', hasMore);
  console.log('Has less = ', hasPrev);

  return(
    <StyledNav>
      <Arrow onClick={hasPrev > 0 ? () => loadPrev() : false}>&larr;</Arrow>
      <Arrow  onClick={hasMore ? ()=> loadNext() : false}>&rarr;</Arrow>
    </StyledNav>
  )
};

export default Nav;