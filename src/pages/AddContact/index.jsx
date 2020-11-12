import React, { useState } from 'react'
import axios from 'axios'
import { ContactStyled } from './style'


export const AddContact = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');

    const submitContact = () =>{
        axios.post('http://localhost:3001/contacts', 
            {name, phone, mail}).then((e) => {
            alert('Contato adicionado!')
        })
    }

    return (
        <ContactStyled>
            <p>Adicionar Contato</p>

            <div className="input-group">
                
                <p>Nome</p>
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                <p>Número</p>
                <input type="text" value={phone} onChange={e => setPhone(e.target.value)} />
                <p>E-mail</p>
                <input type="text" value={mail} onChange={e => setMail(e.target.value)}/>
                <button onClick={submitContact}>Salva</button>

               
            </div>
        </ContactStyled>
    )
}