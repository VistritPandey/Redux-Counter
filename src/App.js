import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <p>
          Hello it is just a simple counter made using the redux template. Didn't change anything, just wanted to keep it simple
          </p>
      </header>
    </div>
  );
}

export default App;
