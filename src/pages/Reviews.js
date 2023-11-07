import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [areReviewsExpanded, setAreReviewsExpanded] = useState(false);
    
    useEffect(() => { 
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
    fetchMovieReviews();
    }, [movieId])

     const toggleReviews = () => {
    setAreReviewsExpanded(!areReviewsExpanded);
    };
    
    return (
        <>
        <h2 onClick={toggleReviews}>Reviews</h2>
      {areReviewsExpanded && (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
        </>
    )
}