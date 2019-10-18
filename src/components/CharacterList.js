import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

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
        <SearchForm
        handleInputChange = {handleInputChange}
        query = {query}
        />
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
          
      </div>
  )
  }