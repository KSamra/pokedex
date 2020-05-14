import styled from 'styled-components';
import React, {useState, Fragment} from 'react';

import Header from '../Header/Header';
import {Form, Input} from '../Filter/Filter';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import LargeCard from '../Card/LargeCard';
import ModalSetup from '../Modal/Modal';


const Flex = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
`;

function Container (props){

  const [showLargeCard, setShowLargeCard] = useState(false);
  const [largeCardData, setLargeCardData] = useState({})
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
     
        <ModalSetup 
          visible={showLargeCard}
          dismiss={dismissLargeCard}
          data={largeCardData}
          >
          </ModalSetup>
        <Content search={search} clickHandler={updateLargeCardDetails} ></Content>
        <Footer/>
      </Flex> 

  );

 }

 export default Container;