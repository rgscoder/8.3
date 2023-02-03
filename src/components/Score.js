import React from 'react';

const Score = (points) => {
    return (
        <div className='points'>
        <p>{points.date} <strong>-</strong>  {points.score} points scored </p>
        </div>
    );
};

export default Score;