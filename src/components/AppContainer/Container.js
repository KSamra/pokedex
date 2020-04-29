import styled from 'styled-components';
import React from 'react';

import Header from '../Header/Header';
import Filter from '../Filter/Filter';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import Nav from '../Buttons/Nav';



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
  return (
    <Flex>
      <Header></Header>
      <Filter>TODO Add filter</Filter>
      <Content></Content>
      {/* <Nav /> */}
      <Footer>footer</Footer>
    </Flex>
  )
}

export default Container;