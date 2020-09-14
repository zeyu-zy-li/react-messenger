import React, { useState } from "react";
import ContactList from './ContactList';

export default function ContactListButton(props){
    return (
        <button id={"contactListButton"} onClick={()=>props.handleClick()}>Contact List</button>
    );
}