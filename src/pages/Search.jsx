import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Search = ({ formatReleaseDate }) => {
    const [results, setResults] = useState([]);
    const [searching, setSearching] = useState(true);
    const { query } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSearch = async () => {
            try {
                const apiKey = "0187dde47d33f50ceeb9fd60c804c200";
                const response = await axios.get(
                    `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${query}`
                );
                setResults(response.data.results);
                setSearching(false);
            } catch (error) {
                console.error('Error fetching search results:', error);
                setSearching(false);
            }
        };

        fetchSearch();
    }, [query]);

    return (
        <div>
            <h2>Hasil pencarian dari "{query}"</h2>

            {searching ? (
                <p>Sedang mencari...</p>
            ) : results.length < 1 ? (
                <div>
                    <p>Tidak ditemukan</p>
                    <button onClick={() => navigate('/')}>Kembali</button>
                </div>
            ) : (
                results
                    .filter((result) => result.poster_path && result.title && result.overview && result.release_date)
                    .map((result) => (
                        <div key={result.id}>
                            <div>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                                    alt={result.title}
                                    width={200}
                                    onClick={() => {
                                        navigate(`/movie/${result.id}`);
                                    }}
                                />
                            </div>
                            <div>
                                <p>{result.title}</p>
                                <p>{formatReleaseDate(result.release_date)}</p>
                                <p>{result.overview}</p>
                            </div>
                        </div>
                    ))
            )}
        </div>
    );
};

export default Search;
