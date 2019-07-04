import React from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

function App() {
  var tet = teste();
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
  );
}
function teste(){
  Axios.get('/postagens')
    .then(result => {
      console.log(result)
    })
}

export default App;
