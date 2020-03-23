import styled from 'styled-components';
import React from 'react';

import Header from '../Header/Header';
import Filter from '../Filter/Filter';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';




const Grid = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: .5fr 6fr .5fr;
  grid-template-areas: 
    "filter header"
    "filter content"
    "footer footer";
`;

const Container = () => {
  return (
    <Grid>
      <Header></Header>
      <Filter>TODO Add filter</Filter>
      <Content></Content>
      <Footer></Footer>
    </Grid>
  )
}

export default Container;