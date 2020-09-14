import React, { useState } from 'react';
import Chat from './components/Chat';
import Login from './components/Login';
import LoginContext from './components/LoginContext';
import ws from './services/wsAPI';

function App() {
  const [username, setUsername] = useState("");
  function handleLogin(name) {
    setUsername(name);
    ws.send(JSON.stringify({type: "join", author: name}));
  }


  return (
    <div className="App">
      {username ?
        <LoginContext.Provider value={username}><Chat username={username} /></LoginContext.Provider> :
        <Login handleLogin={handleLogin}/>}
    </div>
  );
}

export default App;
