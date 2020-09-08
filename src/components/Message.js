import React, { useContext } from 'react';
import LoginContext from './LoginContext';

export default function Message({ message = {author: "", msg: ""} }) {
    const username = useContext(LoginContext);
    return (
    <div className={"message " + (message.author === username ? "message-right" : "message-left")}>{message.msg} from {message.author}</div>
    );
}