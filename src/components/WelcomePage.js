import React from "react";
import styled from "styled-components";

const Main = styled.div `
text-align: center;
`

export default function WelcomePage() {

  let randomNumber = (Math.floor(Math.random() * 10));
  return (
    <section className="welcome-page">
      <Main>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src={`https://rickandmortyapi.com/api/character/avatar/${randomNumber}.jpeg`}
          alt="rick"
        />
      </Main>
    </section>
  );
}
