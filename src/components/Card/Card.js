import React from 'react';

import styled from 'styled-components';

import { ReactComponent as pokeball } from '../../img/pokeball.svg';


const StyledCard = styled.div`
  height: 22rem;
  width: 17rem;
  background-color: peachpuff;
  
background-image: ${props => `linear-gradient(to bottom,
                              ${props.primary}, 
                              ${props.primary} 40%, #282c35)`};
  border-radius: 3px;
  box-shadow: .5rem .5rem 1rem #888888;
  padding: 1rem;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: all .2s;
  &:hover {
    transform: translateY(-1rem);

  }

  
`;


const ImageContainer = styled.div`
  height: 60%;
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

  ${StyledCard}:hover &{
    transform: scale(1.2);
  }
`;

const Header = styled.h1`
  font-weight: 400;
  font-size: 1.8rem;
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

export const typeColors = {
  'bug': {color: '#A8B820', name: 'bug'},
  'electric': {color:'#F8D030', name:'electric'},
  'fire': {color: '#F08030', name: 'fire'},
  'grass': {color: '#78C850', name: 'grass'},
  'normal': {color: '#A8A878', name: 'normal'},
  'rock': {color: '#B8A038', name: 'rock'},
  'dark': {color: '#705848', name: 'dark'},
  'fairy': {color: '#EE99AC', name: 'fairy'},
  'flying': {color: '#A890F0', name: 'flying'},
  'ground': {color: '#E0C068', name: 'ground'},
  'poison': {color: '#A040A0', name: 'poison'},
  'steel': {color: '#B8B8D0', name: 'steel'},
  'dragon': {color: '#7038F8', name: 'dragon'},
  'fighting': {color: '#C03028', name: 'fighting'},
  'ghost': {color: '#705898', name: 'ghost'},
  'ice': {color: '#98D8D8', name: 'ice'},
  'psychic': {color: '#F85888', name: 'psychic'},
  'water': {color: '#6890F0', name: 'water'}
}



const Card = ({name, type1, type2, photo, clickHandler}) => {

// Conditionally render pokemon type2 since not all pokemon have a secondary type
  let t2 = type2 ? <Type color={typeColors[type2].color}>{typeColors[type2].name}</Type> : null;

 
  return (
    <StyledCard onClick={() => clickHandler(name)} 
                primary={typeColors[type1].color} >
      {/* <Pokeball as={pokeball} /> */}
      {/* <Header>{name}</Header> */}
      <ImageContainer >
        <Picture src={photo}/>
      </ImageContainer>
      <Header>{name}</Header>
      <Divider/>
      <Type color={typeColors[type1].color}>{typeColors[type1].name}</Type>
      {t2}
    </StyledCard>
  );
}

export default Card;