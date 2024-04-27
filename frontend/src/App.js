import './App.css';

import {Routes, Route, Link } from 'react-router-dom';
import { Homepage } from './include/Homepage';
import { MentorPage } from './include/MentorPage';

function App() {
  return (
    <div className="App">
      <header>
        <a href="/">Mentorio  </a>
        <a href="/mentors"> Cтать ментором</a>
      </header>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/mentors" element={<MentorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
