import './App.css';

import {Routes, Route, Link } from 'react-router-dom';
import { Homepage } from './include/Homepage';
import { MentorPage } from './include/MentorPage';


function App() {
  return (
    <div className="App" class="container">
      <Homepage/>
    </div>
  );
}

export default App;
