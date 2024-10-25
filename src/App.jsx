import React, { useState } from 'react';
import useLogger from './useLogger';

function App () {
  const [scope, setScope] = useState('');
  const [message, setMessage] = useState('');
  const [logLevel, setLogLevel] = useState('LOG');
  const [logs, setLogs] = useState([]);

  const logMessage = () => {
    const timestamp = new Date().toLocaleString();
    const logEntry = `[${scope.toUpperCase()}] [${timestamp}] ${message}`;

    setLogs(prevLogs => [...prevLogs, logEntry]);
    useLogger(logEntry, logLevel);
  };

  return (
    <div>
      <h1>Logger App</h1>
      <div>
        <label>Scope:</label>
        <input 
          type="text" 
          value={scope} 
          onChange={(e) => setScope(e.target.value)} 
        />
      </div>
      <div>
        <label>Message:</label>
        <input 
          type="text" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
        />
      </div>
      <div>
        <label>Log Level:</label>
        <select value={logLevel} onChange={(e) => setLogLevel(e.target.value)}>
          <option value="ERROR">ERROR</option>
          <option value="WARN">WARN</option>
          <option value="LOG">LOG</option>
          <option value="DEBUG">DEBUG</option>
        </select>
      </div>
      <button onClick={logMessage}>Submit</button>
      
      <div>
        <h2>Console</h2>
        <div>
          {logs.map((log, index) => (
            <p key={index}>{log}</p>
          ))}
        </div>
      </div>
    </div>
  );

}

export default App
