import styled from 'styled-components';
import React from 'react';

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Card from '../Card/Card';

const StyledContent = styled.main`
  grid-area: content;
  background-color: #282c35;
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;


`;

const LoadingBox = styled.span`
  background-color: #282c35;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingMessage = styled.h2`
  color: white;
  letter-spacing: 1rem;
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


  if(error){
    console.log(error);
  }
  if(loading){
    return (
    <LoadingBox>
      <LoadingMessage>
        Loading....
      </LoadingMessage>
    </LoadingBox>)
  }
  if(data){
    console.log(data.pokemons[0]);
  }
  
  return (
    <StyledContent>
      <Card/>
      <Card/>
      <Card/>
    </StyledContent>
  )
};


export default Content;