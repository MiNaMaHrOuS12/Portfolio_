<<<<<<< HEAD
import React from "react";
import "./index.css"
import Home from "./routes/Home"
import Project from "./routes/Project"
import About from "./routes/About"
import Contact from "./routes/Contact"
import { Route,Routes } from 'react-router-dom'
 
function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/project" element={<Project />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
  </>
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> 73715a3 (Initialize project using Create React App)
  );
}

export default App;
