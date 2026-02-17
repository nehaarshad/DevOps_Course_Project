import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [showMessage, setShowMessage] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Visit React Official Website
</a>
        <button onClick={() => setShowMessage(true)}>
  Show My Feature
</button>

{showMessage && (
  <p>Interactive feature added by Iram </p>
)}
        <a
          className="App-link"
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <h1>Welcome to my React App!</h1>
        <p>This is a simple React application.</p>
        <body>
  <h1>Welcome to my React App!</h1>
  <p>This is a simple React application.</p>

  <button onClick={() => setShowMessage(true)}>
    Show Feature
  </button>
  {showMessage && (
    <p>Interactive feature added by Iram </p>
  )}

</body>
      </body>
    </div>
  );
}

export default App;
