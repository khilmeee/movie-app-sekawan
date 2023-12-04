
import React from 'react';
import { useNavigate } from "react-router-dom"

const Card = ({ movie }) => {
  const navigate = useNavigate()

  const formatReleaseDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  return (
    <div onClick={() => navigate(`movie/${movie.id}`)}>

      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <div>
        <b>{movie.title}</b>
        <p>{formatReleaseDate(movie.release_date)}</p>
      </div>

    </div>
  );
};

export default Card;
