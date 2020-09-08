import React, { useState, useEffect } from 'react';
import MessageBox from './MessageBox';
import InputBox from './InputBox';
import ws from '../services/wsAPI';

export default function Chat() {
    const [ messages, setMessages ] = useState([]);
    function addMessage(msg) {
        setMessages((prev) => [...prev, msg]); // to be replaced by reducer
    }
    useEffect(() => {
        ws.onmessage = function(event) {
            addMessage(JSON.parse(event.data));
        }
    });


    return (
        <>
            <MessageBox messages={messages} />
            <InputBox />
        </>
    );
}