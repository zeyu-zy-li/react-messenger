import React, { useState } from 'react';
import Chat from './components/Chat';
import Login from './components/Login';
import LoginContext from './components/LoginContext';

function App() {
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      {username ?
        <LoginContext.Provider value={username}><Chat username={username} /></LoginContext.Provider> :
        <Login handleLogin={(name) => setUsername(name)}/>}
    </div>
  );
}

export default App;
