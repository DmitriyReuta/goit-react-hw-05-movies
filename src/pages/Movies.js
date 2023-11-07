import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Movies() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchQuery = new URLSearchParams(location.search).get('searchQuery') || '';
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery) {

      const fetchMovies = async () => {
        try {
          const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
              api_key: 'fcc6b33c410a16ddfc5977938f0cf7d9',
              query: searchQuery,
            },
          });
  
          setSearchResults(response.data.results);
        } catch (error) {
          console.error('Error searching for movies:', error);
        }
      };
  
      fetchMovies();
    }
  }, [searchQuery]);

  return (
    <div>
      <h1>Search Movies</h1>
      <input
        type="text"
        placeholder="Search for movies..."
        value={searchQuery}
        onChange={(e) => {
          const newSearchQuery = e.target.value;
          navigate(`/movies?searchQuery=${newSearchQuery}`);
        }}
      />
      <button onClick={() => navigate('/movies?searchQuery=' + searchQuery)}>Search</button>
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