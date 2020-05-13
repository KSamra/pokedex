import styled from 'styled-components';
import React from 'react';
import GithubLogo from '../../img/GitHub-Mark/PNG/GitHub-Mark-32px.png';

const StyledFooter = styled.footer`
  /* grid-area: footer; */
  /* position: absolute;
  bottom: 0;
  left: 0; */
  width: 100vw;
  background-color: palevioletred;
  flex-shrink: 0;
  display: flex;
  padding: 2rem 0;
  margin: 1rem 0 0 0;
  justify-content: space-between;
  align-items: center;  
`;

const SocialImage = styled.img`
  margin-left: .5rem;
`;

const TextBox = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: .5rem;
`;


const Footer = (props) => {
  return (
    <StyledFooter>
      <SocialImage src={GithubLogo} alt="Github logo"/>
      <TextBox>
        <p>Built with React and GraphQL</p>
      </TextBox>
      <TextBox>
        <p>All images belong to the Pokemon Companyajldkfajds;lfkaj</p>
      </TextBox>
    </StyledFooter>
  )
};

export default Footer;