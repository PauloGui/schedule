import React from 'react'
import { ContactStyled } from './style'


export const NewContact = () => {
    return (
        <ContactStyled>
            <p>Adicionar Contato</p>

            <div className="input-group">
                <p>Nome</p>
                <input type="text"/>
                <p>Número</p>
                <input type="text"/>
                <p>E-mail</p>
                <input type="text"/>
                <button type="submit" >Salva</button>
            </div>
        </ContactStyled>
    )
}