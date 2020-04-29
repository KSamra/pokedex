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
  grid-template-columns: 1fr 5fr;
  grid-template-rows: .5fr 6fr .2fr .5fr;
  grid-template-areas: 
    "filter header"
    "filter content"
    "filter nav"
    "footer footer";
`;
/*
TODO:
- Change layout style to flexbox. No longer any need for a grid.
- Add search input field.
- Allow user to click on a card to have it expand and provide more information.
*/ 
const Container = () => {
  return (
    <Grid>
      <Header></Header>
      <Filter>TODO Add filter</Filter>
      <Content></Content>
      <Nav />
      <Footer></Footer>
    </Grid>
  )
}

export default Container;