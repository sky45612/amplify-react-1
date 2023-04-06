// import logo from './logo.svg';
import './App.css';
import Bingo from  '../src/component/Bingo.js';
import Home from '../src/component/Home.js';
// import React, { useState } from "react";
import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (    

      <Router>
        <div className="App">
          <header className="App-header">                    
            <ul>              
              <li>
                <Link to="/">Home</Link>                
              </li>
              <li>
                <Link to="/bingo">Bingo</Link>
              </li>
            </ul>
            <Routes>              
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/bingo" element={<Bingo />}></Route>
            </Routes>
          </header>
        </div>
      </Router>
    )
    
  }
  
}

export default App;


