import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";
import SearchForm from "./SearchForm";
import { Link } from 'react-router-dom'
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


export default function LocationsList() {
  // TODO: Add useState to track data from useEffect
  const [location, setLocation] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location/", {
        params: {}
      })
      .then(response => {
        const location = response.data.results.filter(location =>
            location.name.toLowerCase().includes(query.toLowerCase())
        );
        console.log(location)
        setLocation(location);
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
  {location.map(location => {
            return (
              <LocationCard
                key = {location.created}
                name= {location.name}
                type = {location.type}
                dimension = {location.dimension}
                residents = {location.residents}
              />
            );
          })}
        </Main>
      </div>
  )
  }

