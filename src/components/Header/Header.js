import styled from 'styled-components';
import React from 'react';

import PokemonLogo from '../../img/pokemon-logo.png';
import PokeballLogo from '../../img/pokemon-symbol-logo.png';
const StyledHeader = styled.header`
  grid-area: header;
  background-color: cyan;
  
  display: flex;
  justify-content: center;
  align-items: center;
  

`;

const Logo = styled.img`
  height: 10rem;
  margin-right: 2rem;
`;



const Header = () => {
  return (
    <StyledHeader>
      <Logo src={PokeballLogo}/>
      <h1>PokeDex</h1>
    </StyledHeader>
  );
}



export default Header;