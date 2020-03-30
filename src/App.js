import React from 'react';
import Background from './components/background-gradient'
import './App.css';
import Container from './components/container';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Background/>
        <Container />
      </header>
    </div>
  );
}

export default App;
