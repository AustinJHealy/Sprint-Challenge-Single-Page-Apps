import React, { useState } from "react";

 
function SearchForm({ onSearch }) {
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
          name="name"
          value={query.name}
          placeholder="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}

export default SearchForm;