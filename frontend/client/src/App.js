import React from 'react';
import './App.css';
import NavHeader from './components/NavHeader';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import QueueOptions from './components/QueueOptions';
import UserPage from './pages/UserPage';

function App() {
  
  return (
    <Router>
      <NavHeader/>
      <Routes>
        <Route exact path='/' element={<QueueOptions/>}/>
        <Route exact path='/profile' element={<UserPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
