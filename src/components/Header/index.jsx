import React from 'react'

import { HeaderStyle } from './style'

import Logo from '../../assets/logo.png'

export const Header = props => {
    return (
        <HeaderStyle>
            <a href="/">
                <img src={Logo} alt="logo" />
            </a>
        </HeaderStyle>
    )
}