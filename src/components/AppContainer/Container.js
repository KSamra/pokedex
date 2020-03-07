import styled from 'styled-components';
import React, { Fragment } from 'react';

import Header from '../Header/Header';
import Filter from '../Filter/Filter';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';




const Grid = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr 2fr 4fr .5fr;
  grid-template-areas: 
    "header"
    "filter"
    "content"
    "footer";
`;

const Container = () => {
  return (
    <Grid>
      <Header></Header>
      <Filter></Filter>
      <Content></Content>
      <Footer></Footer>
    </Grid>
  )
}

export default Container;