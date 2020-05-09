import styled from 'styled-components';
import React,  {useState, useEffect, Fragment } from 'react';

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Card from '../Card/Card';
import Nav from '../Buttons/Nav';

const StyledContent = styled.main`
  /* grid-area: main; */
  /* background-color: #282c35; */
  background-color: white;
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
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
  const [cardSummary, setCardSummary] = useState(null);
  
  const [showLargeCard, setShowLargeCard] = useState(true);
  const [offset, setOffset] = useState(0);

  const {data, loading, error} = useQuery(QUERY, {
    variables: {
      offset
    }
  });

  

  useEffect(() => {
    console.log(`cardSummary changed values`);
    if (cardSummary){
      document.title = `Pokedex | ${cardSummary}`;
    }
  }, [cardSummary])

  const updateActiveCard = (name) => {
    console.log(`clicked on card ${name}`);
    setCardSummary(name);
    setShowLargeCard(!showLargeCard);
    props.clickHandler(name);
  }

  const loadNext = () => {
    setOffset(offset + 20);
    console.log('Requesting new data with offset ', offset);
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
    <Fragment>
      <StyledContent>
        {content}
      </StyledContent>
      <Nav  loadNext={loadNext}/>
    </Fragment>

      
    
  )
};


export default Content;