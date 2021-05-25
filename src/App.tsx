import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Login from './features/login/Login'

function App() {
  return (
    <div className="App">
      <h3>TODO: password protected content</h3>
      <div>
        <Login />
      </div>
    </div>
  );
}

export default App;
