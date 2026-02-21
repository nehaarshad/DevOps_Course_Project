import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // Valeeja's Contribution
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div>
        <h1>Welcome to my React App!</h1>
        
      </div>

      
      <div style={{ marginTop: "30px" }}>
        <h2>Team Member: Valeej</h2>
        <p>Simple Counter Feature Added</p>

        <button onClick={() => setCount(count + 1)}>
          Click Count: {count}
        </button>
      </div>

    </div>
  );
}

export default App;
