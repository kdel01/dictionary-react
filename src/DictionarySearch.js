import React, { useState } from "react";
import axios from "axios";
import "./DictionarySearch.css";
import Results from "./Results";

export default function DictionarySearch() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
      </form>
      <Results result={result} />
    </div>
  );
}
