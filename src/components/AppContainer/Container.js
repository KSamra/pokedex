import styled from 'styled-components';
import React, { Fragment } from 'react';




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

const Header = styled.header`
  grid-area: header;
  background-color: cyan;
`;

const Filter = styled.div`
  grid-area: filter;
`;

const Content = styled.main`
  grid-area: content;
  background-color: blue;
`;

const Footer = styled.footer`
  grid-area: footer;
  background-color: palevioletred;
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