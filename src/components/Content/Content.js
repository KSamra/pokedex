import styled from 'styled-components';
import React from 'react';

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Card from '../Card/Card';

const StyledContent = styled.main`
  grid-area: content;
  background-color: black;
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;


`;

const QUERY = gql`
query getPokemon{
  pokemons{
    name
    pokedex_number
  }
}
`;

const Content = (props) => {
  const {data, loading, error} = useQuery(QUERY);

  if(error){
    console.log(error);
  }
  console.log(data);
  return (
    <StyledContent>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/> 
      <Card/>
    </StyledContent>
  )
};

export default Content;