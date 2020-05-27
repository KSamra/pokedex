import styled from 'styled-components';
import React from 'react';

// Temp
// import PokemonLogo from '../../img/pokemon-logo.png';
import PokeballLogo from '../../img/pokemon-symbol-logo.png';
const StyledHeader = styled.header`
  /* grid-area: header; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282c35;
  padding: 0.5rem 0;


`;

const Logo = styled.img`
  height: 10rem;
  background-image: linear-gradient(white, white);
  border-radius: 50%;
  overflow: hidden;
  margin: 1rem 1rem; 
`;

const Title = styled.h1`
  color: white;
  font-size: 6rem;
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