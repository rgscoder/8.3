import React from 'react';
import Score from './Score';

const Students = (athletes) => {
    return (
        <div className="athletes">
        <h2>{athletes.student.name}</h2>
        <p className='bio'>{athletes.student.bio}</p>
            <div className='scoreSection'>
            <h3>Recent Games</h3>
            
            {
                athletes.student.scores.map((item, index) => (
                <Score key={index} score={item.score} date={item.date}/>
                ))
                }
            </div>
        </div>
    );
};

export default Students;