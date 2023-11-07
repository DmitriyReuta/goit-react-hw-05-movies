import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export function Cast() {
      const [cast, setCast] = useState([]);
      const [isCastExpanded, setIsCastExpanded] = useState(false);
       const { movieId } = useParams();

    useEffect(() => {

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
        fetchMovieCast();
    }, [movieId]);

    const toggleCast = () => {
    setIsCastExpanded(!isCastExpanded);
    };
    
    return (
        <>
            <h2 onClick={toggleCast}>Cast</h2>
      {isCastExpanded && (
        <ul>
          {cast.map((actor) => (
            <li key={actor.id}>
            {actor.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
                width="200px"
              />
            )}
            {actor.name}
          </li>
          ))}
        </ul>
      )}</>
    )
}