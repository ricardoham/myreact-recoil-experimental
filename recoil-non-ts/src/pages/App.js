import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Routes from '../routes/Routes';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='/assets/logo.svg' className="App-logo" alt="logo" />
      </header>
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
