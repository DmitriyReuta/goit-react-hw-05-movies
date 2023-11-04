import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/search/movie',
        {
          params: {
            api_key: 'fcc6b33c410a16ddfc5977938f0cf7d9',
            query: searchQuery,
          },
        }
      );

      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error searching for movies:', error);
    }
  }

  return (
    <div>
      <h1>Search Movies</h1>
      <input
        type="text"
        placeholder="Search for movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>
            <Link to={`/movies/${result.id}`}>{result.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;