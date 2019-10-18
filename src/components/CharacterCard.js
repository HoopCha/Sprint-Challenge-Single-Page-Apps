import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
    <h1>Name: {props.name}</h1>
    <img src={props.image} alt="A character in Rick and Morty" /> 
    <p>Gender: {props.gender}</p>
    <p>Species: {props.species}</p>
    <p>Status: {props.status}</p>
    </div>
  );
}
