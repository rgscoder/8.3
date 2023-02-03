import React, { useState } from 'react';

import './App.css'
import Students from './components/Students';
import Info from './Info';

const App = () => {


  const [studentData, setStudentData] = useState(Info);

  return (
    <div id="main">
      <h1>Athlete Roster</h1>
      <div className="roster">
        {
          studentData.students.map((student, index) => (
            <Students key={index} student={student} />
          ))
        }
      </div>
    </div>
  );
};

export default App