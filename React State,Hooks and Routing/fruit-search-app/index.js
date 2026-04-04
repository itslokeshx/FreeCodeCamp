const { useState, useEffect } = React;

export function FruitsSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div id="search-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-input">Search for fruits:</label>
        <input
          id="search-input"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <div id="results">
        {results.length > 0 ? (
          results.map((item, index) => (
            <p className="result-item" key={index}>
              {item}
            </p>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}
