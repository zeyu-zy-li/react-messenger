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
            const newMessage = JSON.parse(event.data);
            const notification = new Notification(`${newMessage.author}: ${newMessage.msg}`);
            addMessage(newMessage);
        }
    });

    useEffect(() => {
        if (!("Notification" in window)) {
            alert("Not support");
            return;
        }
        if (Notification.permission === "default") {
            Notification.requestPermission();
        }
    });


    return (
        <>
            <MessageBox messages={messages} />
            <InputBox />
        </>
    );
}