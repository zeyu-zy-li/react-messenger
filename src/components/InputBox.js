import React, { useState, useContext } from 'react';
import LoginContext from './LoginContext';
import ws from '../services/wsAPI';

export default function InputBox({ handleSubmit = f => f }) {
    const [ text, setText ] = useState("");
    const username = useContext(LoginContext);
    return (
      <form id="inputBox" onSubmit={(e) => {
          e.preventDefault();
          // handleSubmit({author: username, msg: text});
          ws.send(JSON.stringify({type:"chat", author: username, msg: text}));
          setText("");
        }}>
        <input className="text"
               placeholder="Message to send"
               value={text}
               onChange={(e) => { setText(e.target.value) }}>
        </input>
        <button className="btn">Send</button>
      </form>
    );
}