import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [text, setText] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault()
        navigate(`/search/${text}`);
    };

    return (
        <header>
            <div>
                <h2>Welcome.</h2>
                <h3>Millions of movies, TV shows, and people to discover. Explore now.</h3>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Search for a movie, TV show, person...' value={text} onChange={(e) => setText(e.target.value)} />
                    <button>Search</button>
                </form>
            </div>
        </header>
    )
}

export default Header