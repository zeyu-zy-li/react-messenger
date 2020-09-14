import React from "react";

export default function ContactList(props){
    const contactList = Object.keys(props.contactList).map(
        contact => <li key={contact}>{contact}</li>
        );
    return props.contactVisible ? 
            <div className={"contactList"}>
                <ul>
                    {contactList}
                </ul>
            </div> : 
            null;

}