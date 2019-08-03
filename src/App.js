import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar'
import Main from './Main'


function App() {
  return (
    <Router>
      <div className="App">
          <NavBar />
          <Main />
      </div>
    </Router>
  );
}

export default App;
