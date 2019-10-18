import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import styled from "styled-components";

const Main = styled.div `
display:flex;
flex-wrap: wrap;
justify-content:space-evenly;
padding-bottom: 20px;
`

const Search = styled.div `
display:flex;
justify-content:center;
margin: 10px;
`


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character", {
        params: {}
      })
      .then(response => {
        const character = response.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        console.log(character)
        setCharacter(character);
      })
      .catch(error => {
        console.log("Wubalubadubdub: ", error);
    });
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
      <div>
        <Search>
        <SearchForm
        handleInputChange = {handleInputChange}
        query = {query}
        />
        </Search>
        <Main>
  {character.map(character => {
            return (
              <CharacterCard
                key = {character.created}
                name= {character.name}
                image = {character.image}
                gender = {character.gender}
                species = {character.species}
                status = {character.status}
              />
            );
          })}
        </Main>
      </div>
  )
  }