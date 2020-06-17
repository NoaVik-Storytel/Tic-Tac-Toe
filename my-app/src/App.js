import React from 'react';
import logo from './logo.svg';
import './App.css';

class square extends React.Component {
  
}

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
          Learn React here click the link now!
        </a>
      </header>
      <body>
        <h1>Shopping List for me</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </body>
    </div>
  );
}

export default App;
