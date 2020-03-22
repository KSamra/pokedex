import styled from 'styled-components';
import React from 'react';

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Card from '../Card/Card';

const StyledContent = styled.main`
  grid-area: content;
  background-color: #282c35;
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
  grid-column-gap: 4rem;
  grid-row-gap: 2rem;
  padding: 1rem;


`;

const LoadingBox = styled.span`
  background-color: #282c35;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingMessage = styled.h2`
  color: whitesmoke;
  letter-spacing: 1rem;
  display: inline-block;
  
`;


const QUERY = gql`
query getPokemon{
  pokemons{
    name
    pokedex_number
    type1
    type2
    photo
  }
}
`;

const Content = (props) => {
  const {data, loading, error} = useQuery(QUERY);

  let content = [];

  if(loading){
    return (
    <LoadingBox>
      <LoadingMessage>
        Loading....
      </LoadingMessage>
    </LoadingBox>)
  }

  if(error) {
    return (
      <LoadingBox>
        <LoadingMessage>
          Error
        </LoadingMessage>
      </LoadingBox>)
  }

  if(data){
    for (let index = 0; index < 20; index++) {
      const {name, pokedex_number, type1, type2, photo} = data.pokemons[index];
      content.push(<Card key={pokedex_number} name={name} photo={photo} type1={type1} type2={type2}/>)
    }
  }
  
  return (
    <StyledContent>
      {content}
    </StyledContent>
  )
};


export default Content;