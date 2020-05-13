import styled from 'styled-components';
import React, {useState, Fragment} from 'react';

import Header from '../Header/Header';
import {Form, Input} from '../Filter/Filter';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import LargeCard from '../Card/LargeCard';
import ModalSetup from '../Modal/Modal';

// const Grid = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: grid;
//   /* grid-template-columns: 1fr;
//   grid-template-rows: .5fr 6fr .2fr .5fr; */
//   grid-template-columns: 1fr;
//   grid-template-rows: 1fr .3fr 7fr .5fr;
//   grid-template-areas: 
//     "header"
//     "filter"
//     "main"
//     "footer";
// `;

const Flex = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
`;
/*
TODO:
- Change layout style to flexbox. No longer any need for a grid.
- Add search input field.
- Allow user to click on a card to have it expand and provide more information.
*/ 
function Container (props){

  const [showLargeCard, setShowLargeCard] = useState(false);
  const [largeCardData, setLargeCardData] = useState("empty")
  const [searchText, setSearchText] = useState('');
  const [search, setSearch] = useState('');

  const updateLargeCardDetails = (data) => {
    console.log('New data supplied!');
    console.log(data);
    setLargeCardData(data);
    setShowLargeCard(!showLargeCard);
    
  }

  const dismissLargeCard = () => {
    
    setShowLargeCard(false);
  }

  const onType = (event) => {
    setSearchText(event.target.value);
  }

  const onSubmitForm = (event) => {
    event.preventDefault();
    setSearch(searchText);

  }

  return (

      
      <Flex>
        <Header></Header>
        <div style={{alignSelf: 'center'}}>
          <Form onSubmit={onSubmitForm}>
            <Input 
               type="text" 
               name="search" 
               placeholder="Search"
              //  value={search}
               onChange={onType} />
          </Form>
        </div>
        {/* {showLargeCard ? <LargeCard data={largeCardData} ></LargeCard> : null} */}
        {/* <LargeCard animation={showLargeCard} data={largeCardData}></LargeCard> */}
        <ModalSetup 
          visible={showLargeCard}
          dismiss={dismissLargeCard}
          children={largeCardData}
          ></ModalSetup>
        <Content search={search} clickHandler={updateLargeCardDetails} ></Content>
        <Footer/>
      </Flex> 

  );

 }

 export default Container;