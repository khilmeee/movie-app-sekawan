import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Rating from '../components/movie/Rating';

const MovieDetail = () => {
    const navigate = useNavigate();
    const [movie, setMovie] = useState({});
    const [rating, setRating] = useState(0);

    const handleRating = (rateny) => {
        setRating(rateny);
    }

    const { id } = useParams();

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const apiKey = "0187dde47d33f50ceeb9fd60c804c200";
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
                );
                setMovie(response.data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieDetails();
    }, [id]);

    return (
        <div>
            <div>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt={movie.title} />
                </div>
                <div>
                    <h2>{movie.title}</h2>
                    <Rating onRate={handleRating} />
                        {rating > 0 && <p>Your Rating: {rating} ⭐</p>}
                    <p>Overview</p>
                    <p>{movie.overview}</p>
                    <p>Popularity: {movie.popularity}</p>
                    <p>Release Date: {movie.release_date}</p>
                    <button onClick={()=> {navigate(-1)}}>BAck</button>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
