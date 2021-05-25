import React from 'react';
import './App.css';
import Login from './features/login/Login'
import { useToken } from './app/useToken'
import Notes from './features/notes/Notes'

function App() {
  const token = useToken();
  return (
    <div className="App">
      {token.status === "loggedIn"
      ? <Notes />
      : "please login first to see the Notes"}
      <div>
        <Login />
      </div>
    </div>
  );
}

export default App;
