import React, {useState} from 'react';
import './App.css';
import NavHeader from './components/NavHeader';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import QueueOptions from './components/QueueOptions';
import UserPage from './pages/UserPage';
import Behavioral from './pages/Behavioral';
import Resume from './pages/ResumeRev';
import Coding from './pages/Coding';

function App() {
  
  return (
    <Router>
      <NavHeader/>
      <Routes>
        <Route exact path='/' element={<QueueOptions/>}/>
        <Route exact path='/profile' element={<UserPage/>}/>
        <Route exact path='/behavioral' element={<Behavioral/>}/>
        <Route exact path='/resume-rev' element={<Resume/>}/>
        <Route exact path='/coding' element={<Coding/>}/>
      </Routes>
    </Router>
  );
}

export default App;
