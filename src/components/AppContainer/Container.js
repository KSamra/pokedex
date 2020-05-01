import styled from 'styled-components';
import React, {useState} from 'react';

import Header from '../Header/Header';
import Filter from '../Filter/Filter';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import LargeCard from '../Card/LargeCard';
import { Fragment } from 'react';


const Grid = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  /* grid-template-columns: 1fr;
  grid-template-rows: .5fr 6fr .2fr .5fr; */
  grid-template-columns: 1fr;
  grid-template-rows: 1fr .3fr 7fr .5fr;
  grid-template-areas: 
    "header"
    "filter"
    "main"
    "footer";
`;

const Flex = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  
`;
/*
TODO:
- Change layout style to flexbox. No longer any need for a grid.
- Add search input field.
- Allow user to click on a card to have it expand and provide more information.
*/ 
const Container = () => {

  const [showLargeCard, setShowLargeCard] = useState(false);
  const [largeCardData, setLargeCardData] = useState({})

  const updateLargeCardDetails = (data) => {
    console.log('New data supplied!');
    console.log(data);
    setLargeCardData(data);
    setShowLargeCard(!showLargeCard);
    
  }


  return (
    <Fragment>
      {showLargeCard ? <LargeCard data={largeCardData} ></LargeCard> : null}
      <Flex>
        <Header></Header>
        <Filter>TODO Add filter</Filter>
        <Content clickHandler={updateLargeCardDetails}></Content>
        {/* <Nav /> */}
        <Footer>footer</Footer>
      </Flex> 
    </Fragment>
  )
}

export default Container;