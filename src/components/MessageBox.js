import React from 'react';
import Message from './Message';

export default function MessageBox( { messages = [] } ) {
    const children = messages.map((msg,idx) => <Message key={idx} message={msg} />)
    return (
      <div id="messageBox">
          {children}
      </div>
    );
}