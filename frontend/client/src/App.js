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
  const [behavioralCount, setBehavioralCount] = useState(3);
  const [resumeCount, setResumeCount] = useState(3);
  const [codingCount, setCodingCount] = useState(3);
  const [counts, setCounts] = useState([behavioralCount, resumeCount, codingCount]);
  
  return (
    <Router>
      <NavHeader/>
      <Routes>
        <Route exact path='/' element={<QueueOptions counts={counts} />}/>
        <Route exact path='/profile' element={<UserPage/>}/>
        <Route exact path='/behavioral' element={<Behavioral count={behavioralCount} setBehavioralCount={setBehavioralCount}/>}/>
        <Route exact path='/resume-rev' element={<Resume count={resumeCount} setResumeCount={setResumeCount}/>}/>
        <Route exact path='/coding' element={<Coding count={codingCount} setCodingCount={setCodingCount}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
