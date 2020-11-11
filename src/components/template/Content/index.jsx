import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlus, FaPhone, FaMailBulk } from 'react-icons/fa'
import { ContentStyle } from './style'

export const Content = props => {
    return (
        <ContentStyle>
            <div className="container-add">
                <Link to="/newcontact">
                    <FaPlus size={20}/>
                </Link>
            </div>
            <div className="container-contact">
                <a href="/">
                    <strong>Paulo Sousa</strong>
                    <p><FaPhone /> - 000000000</p>
                    <p><FaMailBulk /> - paulopgss@gmail.com</p>
                </a>
            </div>
        </ContentStyle>
    )
}