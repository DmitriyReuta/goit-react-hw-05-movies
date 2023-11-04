import React, { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import axios from 'axios';

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

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

    const fetchMovieCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits`,
          {
            params: {
              api_key: 'fcc6b33c410a16ddfc5977938f0cf7d9',
            },
          }
        );

        setCast(response.data.cast);
      } catch (error) {
        console.error('Error fetching movie cast:', error);
      }
    };

    const fetchMovieReviews = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
          {
            params: {
              api_key: 'fcc6b33c410a16ddfc5977938f0cf7d9',
            },
          }
        );

        setReviews(response.data.results);
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
      }
    };

    fetchMovieDetails();
    fetchMovieCast();
    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      <h1>{movieDetails.title}</h1>
      <p>{movieDetails.overview}</p>

      <h2>Cast</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>

      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default MovieDetails;