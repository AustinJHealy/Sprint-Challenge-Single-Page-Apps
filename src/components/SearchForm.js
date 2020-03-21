import React, { useState } from "react";

 
export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState({
    name: ""
  })
  const changeHandler = (event) => {
    setQuery({ ...query, name: event.target.value })
  }

  return (
    <section className="search-form">
     <form onSubmit={() => onSearch(query)}>
        <input
          onChange={changeHandler}
          placeholder="name"
          value={query.name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
