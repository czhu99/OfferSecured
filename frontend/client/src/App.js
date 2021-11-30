import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavHeader from './components/NavHeader';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavHeader/>
    </Router>
  );
}

export default App;
