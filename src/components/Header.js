import React from "react";
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>

    <div>
        <div>
          <Link to="/">Welcome Page</Link>
        </div>
        <div>
        <Link to="/character">Character List</Link>
        </div>
        <div>
        <Link to="/contact">Location List</Link>
        </div>
    </div>
    </header>
  );
}
