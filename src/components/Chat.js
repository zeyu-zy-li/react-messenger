import React, { useState, useEffect } from 'react';
import MessageBox from './MessageBox';
import InputBox from './InputBox';
import ContactList from './ContactList';
import ContactListButton from './ContactListButton';
import ws from '../services/wsAPI';

export default function Chat() {
    const [ messages, setMessages ] = useState([]);
    const [ contacts, setContacts ] = useState({});
    function addMessage(msg) {
        setMessages((prev) => [...prev, msg]); // to be replaced by reducer
    }
    useEffect(() => {
        ws.onmessage = function(event) {
            const newMessage = JSON.parse(event.data);
            // const notification = new Notification(`${newMessage.author}: ${newMessage.msg}`);
            switch (newMessage.type) {
                case "join":
                    setContacts((c) => ({...c, [newMessage.author]:true}));
                    break;
                case "chat":
                    addMessage(newMessage);
                    break;
                default:
                    break;
            }
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

    // const [ contactList, setContactList ] = useState(['a','b','c']);
    const [ contactVisible, setContactVisible ] = useState(false);
    function changeContactVisibleState(){
        setContactVisible(x=>!x)
    }
    

    return (
        <div id="container">
            <ContactListButton handleClick={changeContactVisibleState}/>
            <ContactList contactList={contacts} contactVisible={contactVisible}/>
            <div className={"chatBox"}>
                <MessageBox messages={messages} />
                <InputBox />
            </div>
        </div>
    );
}