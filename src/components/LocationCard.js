import React from "react";
import styled from "styled-components";

const Card = styled.div `
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
width: 35%;
padding: 10px 20px 10px 20px;
:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
`

export default function LocationCard(props) {
  return (
    <Card>
    <h1>{props.name}</h1>
    <p>Type: {props.type}</p>
    <p>Dimension: {props.dimension}</p>
    <p>Population: {props.residents.length}</p>
    </Card>
  );
}
