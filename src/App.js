import React from 'react';
import logo from './logo.svg';

function App() {
  const subject = "React";

  return (
    <main className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, {subject}！
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </main>
  );
}

export default App;
