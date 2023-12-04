import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const List = ({ type, name }) => {
    const [movies, setMovies] = useState([]);
    const apikey = "0187dde47d33f50ceeb9fd60c804c200";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${type}?api_key=${apikey}`
                );
                setMovies(response.data.results);
            } catch (error) {
                console.error('Error fetching movie data:', error);
            }
        };

        fetchData();
    }, [type]);



    return (
        <div>
            <h2>{name}</h2>
            <div>
                {movies.map((movie) => (
                    <Card key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default List;
