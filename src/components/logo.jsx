import React from 'react'
import './logo.css'
import Logo from '../assets/images/code.svg'

export default function aLogo() {
    return (
        <div className="logo">
            <img className="icon-logo" src={Logo} alt="Logo" />
            <strong className="label-logo">Codefy</strong>
        </div>
    )
}