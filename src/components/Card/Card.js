import React from 'react';

import styled from 'styled-components';

import {ReactComponent as pokeball } from '../../img/pokeball.svg';


const StyledCard = styled.div`
  height: 20rem;
  width: 15rem;
  background-color: palevioletred;
  border-radius: 3px;
  box-shadow: .5rem .5rem 1rem #888888;
  padding: 1rem;
  color: black;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  
`;

const CardHeader = styled.header`
  background-color: cyan;
  margin-bottom: .5rem;
`;

const picture = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png`

const StyledImageContainer = styled.div`
  height: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  /*width: 100%; */
`;

const StyledPicture = styled.img.attrs( ({src}) => ({
  src
}))`
  height: 100%;
  
`;

const Header = styled.h1`
  font-weight: 400;
  color: #fff;
`;

const Pokeball = styled.svg`
  height: 2rem;
  width: 2rem;
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

const PokedexNumber = styled.p`
  text-transform: uppercase;
  font-weight: 400;
  padding-right: 1rem;
`;

const Card = (props) => {
  return (
    <StyledCard>
      
      <Pokeball as={pokeball} />
      <CardHeader>
        <Header>{props.name}</Header>
      </CardHeader>
      <StyledImageContainer >
        <StyledPicture src={picture}/>
      </StyledImageContainer>
    </StyledCard>
  );
}

export default Card;