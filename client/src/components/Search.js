import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`/api/search?query=${encodeURIComponent(query)}`);
      setResults(response.data);
    } catch (error) {
      setError('Nepodařilo se provést hledání: ' + error.message);
    }
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Vyhledat..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit">Hledat</button>
      </form>
      {loading && <p>Načítání...</p>}
      {error && <p>{error}</p>}
      <ul>
        {results.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;