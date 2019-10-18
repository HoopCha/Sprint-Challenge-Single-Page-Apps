import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: white;
  background: #A9D3E9;
  padding: 20px;
`;

const Main = styled.div `
display:flex;
flex-wrap: wrap;
justify-content:space-evenly;
padding-bottom: 20px;
`

const StyledLink = styled(Link) `
background-color: #35C9DD;
color: white;
padding: 14px 25px;
text-align: center;
text-decoration: none;
display: inline-block;
:hover{
  background-color: #A9F3FD;
}
`

export default function Header() {
  return (
    <header className="ui centered">
      <Title>Rick &amp; Morty Fan Page</Title>

    <Main>
        <div>
          <StyledLink to="/">Welcome Page</StyledLink>
        </div>
        <div>
        <StyledLink to="/character">Character List</StyledLink>
        </div>
        <div>
        <StyledLink to="/location">Location List</StyledLink>
        </div>
    </Main>
    </header>
  );
}
