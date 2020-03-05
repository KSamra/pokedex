import React from 'react';

import styled from 'styled-components';


const StyledCard = styled.div`
  height: 20rem;
  width: 15rem;
  background-color: palevioletred;
  border-radius: 3px;
  box-shadow: .5rem .5rem 1rem #888888;
  padding: 2rem;
  color: black;

  display: flex;
  flex-direction: column;
  align-items: center;
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

const StyledPicture = styled.img.attrs(props => ({
  src: props.src
}))`
  height: 100%;
  
`;

const Title = styled.h1`
  font-weight: 400;
  color: #fff;
  
  

`;

const Card = (props) => {
  return (
    <StyledCard>
      <Title>Bulbasaur</Title>
      <StyledImageContainer >
        <StyledPicture src={picture}/>
      </StyledImageContainer>
    </StyledCard>
  );
}

export default Card;