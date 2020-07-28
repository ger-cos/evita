import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js'
import PetForm from './components/PetForm.js'
import PetPanel from './components/PetPanel.js'

function App() {
  return (
    <div className="App">
      <NavBar> </NavBar>
      
      <PetPanel></PetPanel>
      
      {/*
      <div className="container">
        
        <div className="row mt-4">
          <div className="col-md-4 text-center">
            <PetForm></PetForm>
          </div>
        </div>

        <div className="col-md-8">
          <div className="row">
            <PetPanel></PetPanel>
          </div>
        </div>

      </div>
      
      {/*
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
      */}
    </div>
  );
}

export default App;
