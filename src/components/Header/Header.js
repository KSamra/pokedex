import styled from 'styled-components';
import React from 'react';

// Temp
// import PokemonLogo from '../../img/pokemon-logo.png';
import PokeballLogo from '../../img/pokemon-symbol-logo.png';
const StyledHeader = styled.header`
  grid-area: header;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282c35;


`;

const Logo = styled.img`
  height: 10rem;
  margin-right: 2rem;
  background-image: linear-gradient(white, white);
  border-radius: 50%;
  overflow: hidden;
  
`;

const Title = styled.h1`
  letter-spacing: 1rem;
  color: papayawhip;
`;


const Header = () => {
  return (
    <StyledHeader>
      <Logo src={PokeballLogo}/>
      <Title>PokeDex</Title>
    </StyledHeader>
  );
}



export default Header;