import React, { useState } from "react";

const apiKey = "5RKYV7T7A9CBJYQP";
const endpoint = "https://www.alphavantage.co/query";

function Ticker() {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (event) => {
    const query = event.target.value.toUpperCase();
    setInputValue(query);

    if (query.length < 2) {
      setSuggestions([]);
      return;
    }

    const url = `${endpoint}?function=SYMBOL_SEARCH&keywords=${query}&apikey=${apiKey}&region=BR`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      const matches = data.bestMatches.filter((match) =>
        match["1. symbol"].includes(".SAO")
      );
      setSuggestions(matches);
    } catch (error) {
      console.error(error);
    }
  };

  const suggestionOptions = suggestions.map((match) => (
    <option key={match["1. symbol"]} value={match["1. symbol"]}>
      {match["2. name"]}
    </option>
  ));

  return (
    <div>
      <label htmlFor="ticker">Enter Ticker:</label>
      <input
        type="text"
        id="ticker"
        value={inputValue}
        onChange={handleInputChange}
      />
      <datalist id="list">{suggestionOptions}</datalist>
    </div>
  );
}

export default Ticker;
