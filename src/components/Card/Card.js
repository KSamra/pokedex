import React from 'react';

import styled from 'styled-components';

import { ReactComponent as pokeball } from '../../img/pokeball.svg';


const StyledCard = styled.div`
  height: 22rem;
  width: 17rem;
  background-color: peachpuff;
  border-radius: 3px;
  box-shadow: .5rem .5rem 1rem #888888;
  padding: 1rem;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  
`;



const picture = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png`

const ImageContainer = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  /*width: 100%; */
`;

const Picture = styled.img.attrs( ({src}) => ({
  src
}))`
  height: 100%;
`;

const Header = styled.h1`
  font-weight: 400;
  color: #fff;
  margin-bottom: .5rem;
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

const Divider = styled.section`
  content: "";
  width: 75%;
  border-bottom: 1px solid whitesmoke;
  margin-bottom: .5rem;
`;

//TODO: Make this a grid container and think about other stats to showcase
const FrontStatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Type = styled.div`
  background-color: ${ props => props.color};
  height: 2rem;
  width: 5rem;
  display: inline-block;
  border-radius: 5px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  letter-spacing: .2rem;
  border: 1px solid #635c07;
  font-weight: 600;


`;

const textColor = `#c2c3c4`;
const green = '#36b541';
const fire = '#F08030';

const Card = (props) => {
  return (
    <StyledCard>
      <Pokeball as={pokeball} />
      <Header>{props.name}</Header>
      <ImageContainer >
        <Picture src={picture}/>
      </ImageContainer>
      <Divider/>

      <Type color={green}>Grass</Type>
      <Type color={fire}>Fire</Type>
    </StyledCard>
  );
}

export default Card;