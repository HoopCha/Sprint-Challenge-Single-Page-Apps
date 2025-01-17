import React, { useState } from "react";

export default function SearchForm(props) {
  return (
    <section>
      <form className="search">
        <input
          type="text"
          onChange={props.handleInputChange}
          value={props.query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
    </section>
  );
}