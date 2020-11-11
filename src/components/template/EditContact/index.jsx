import React from 'react'

import { EditContactStyle } from './style'

export const EditContact = props => {
    return (
        <EditContactStyle>
            <p>Editar contato</p>

            <div className="input-group">
                <p>Nome</p>
                <input type="text" />
                <p>Número</p>
                <input type="text" />
                <p>E-mail</p>
                <input type="text" />

                <div className="group-btn">
                    <button className="btn-delete">Apagar</button>
                    <button className="btn-save">Salva</button>
                </div>


            </div>
        </EditContactStyle>
    )
}