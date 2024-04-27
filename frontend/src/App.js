import './App.css';

import {Routes, Route, Link } from 'react-router-dom';
import { Homepage } from './include/Homepage';
import { MentorPage } from './include/MentorPage';


function App() {
  return (
    <div className="App" class="container">

      <div class="row nav-panel">
        <div class="col-md-12 col-lg-2"><a href="/" id="title">Mentorio</a></div>

        <div class="col-md-6 col-sm-12 col-xs-12 col-lg-2"><a href="#" class="nav-item">Поиск ментора</a></div>

        <div class="col-md-6 col-sm-12 col-xs-12 col-lg-2"><a href="#" class="nav-item">Личный кабинет</a></div>

        <div class="col-lg-2"></div>
    
        <div class="col-md-6 col-sm-12 col-xs-12 col-lg-2"><a href="/mentors" className="nav-item">Cтать ментором</a></div>

        <div class="col-md-6 col-sm-12 col-xs-12 col-lg-2"><a href="#" className="log-in">Вход</a></div>
      </div>
  
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/mentors" element={<MentorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
