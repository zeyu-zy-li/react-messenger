import React, { useState } from 'react';

export default function Login({handleLogin = f => f}) {
    const [username, setUsername] = useState("");
    return (
        <form onSubmit={() => handleLogin(username) }>
            <input id="login-form"
                   placeholder="Your Name"
                   onChange={(e) => setUsername(e.target.value)}
            ></input>
        </form>
    );
}