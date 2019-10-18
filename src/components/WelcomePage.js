import React from "react";
import styled from "styled-components";
import {TweenMax, Back} from "gsap/TweenMax";

const Main = styled.div `
text-align: center;
`
const StyledImage = styled.img `
-webkit-animation: fadein 4s;
@keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 1; }
}
`

export default function WelcomePage() {

var randomNumber = Math.floor(Math.random() * 10)+1;

function randomGenerator() {
  randomNumber = Math.floor(Math.random() * 10)+1
  console.log(randomNumber)
}

// setInterval(randomGenerator, 3000);

  return (
    <section className="welcome-page">
      <Main>
        <h1>Welcome to the ultimate fan site!</h1>
        <StyledImage
          className="main-img"
          src={`https://rickandmortyapi.com/api/character/avatar/${randomNumber}.jpeg`}
          alt="rick"
        />
      </Main>
    </section>
  );
}
