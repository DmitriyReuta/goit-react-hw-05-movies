import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          {
            params: {
              api_key: 'fcc6b33c410a16ddfc5977938f0cf7d9',
            },
          }
        );

        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>
      </header>
      <h1>{movieDetails.title}</h1>
      {movieDetails.backdrop_path && (
        <img
          src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
          alt={movieDetails.title}
          width="600px"
        />
      )}
      <p>{movieDetails.overview}</p>

      <Cast />
      <Reviews />
      <Outlet />

      <button onClick={() => window.history.back()}>Back</button>
    </div>
  );
}

export default MovieDetails;