import React from 'react';

const Rating = ({ onRate }) => {
    return (
        <div>
            <h2>Rate this movie:</h2>
            <select onChange={(e) => onRate(e.target.value)}>
                <option value="1">⭐</option>
                <option value="2">⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="5">⭐⭐⭐⭐⭐</option>
            </select>
        </div>
    );
};

export default Rating;
