import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { FaPlus, FaPhone, FaMailBulk } from 'react-icons/fa'
import { ContentStyle } from './style'

export const List = props => {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/contacts').then(resp => {
            setContacts(resp.data)
        })
    }, []);

    return (
        <ContentStyle>
            <div className="container-add">
                <Link to="/newcontact">
                    <FaPlus size={20} />
                </Link>
            </div>
            {
                contacts.map(contact => (
                    <div className="container-contact" key={contact.id}>
                        <a href="/">
                            <strong>{contact.name}</strong>
                            <p><FaPhone /> - {contact.phone}</p>
                            <p><FaMailBulk /> - {contact.mail}</p>
                        </a>
                    </div>
                ))
            }
        </ContentStyle>
    )
}