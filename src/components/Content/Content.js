import styled from 'styled-components';
import React,  {useState, useEffect } from 'react';

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Card from '../Card/Card';

const StyledContent = styled.main`
  grid-area: main;
  background-color: #282c35;
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  grid-column-gap: 3rem;
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
query getPokemon($offset: Int, $pageSize: Int){
  pokemons(offset: $offset, pageSize: $pageSize){
    offset
    hasMore
    pokemons {
      name
      pokedex_number
      type1
      type2
      photo
    }
  }
}
`;

const Content = (props) => {
  const {data, loading, error} = useQuery(QUERY, {
    variables: {
      offset: 5
    }
  });

  const [cardSummary, setCardSummary] = useState(null);
  
  useEffect(() => {
    console.log(`cardSummary changed values`);
    if (cardSummary){
      document.title = `Pokedex | ${cardSummary}`;
    }
  }, [cardSummary])

  const updateActiveCard = (name) => {
    console.log(`clicked on card ${name}`);
    setCardSummary(name);
  }



  let content = [];

  if(loading){
    return(
    <LoadingBox>
      <LoadingMessage>
        Loading....
      </LoadingMessage>
    </LoadingBox>)
  }

  if(error) {
    console.log(error);
    return(
      <LoadingBox>
        <LoadingMessage>
          ERROR
        </LoadingMessage>
      </LoadingBox>)
  }

  if(data){

    content = data.pokemons.pokemons
      .map(({name,
            pokedex_number,
            type1,
            type2,
            photo
            }) => <Card key={pokedex_number} 
            name={name} 
            photo={photo} 
            type1={type1} 
            type2={type2}
            clickHandler={updateActiveCard}/>)

 
  }
  
  return (
    <StyledContent>
      {content}
    </StyledContent>
  )
};


export default Content;