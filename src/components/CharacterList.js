import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character", {
        params: {}
      })
      .then(response => {
        const character = response.data.results;
        console.log("Character:", character);
        setCharacter(character);
      });
  }, []);

  return (
      <div>
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