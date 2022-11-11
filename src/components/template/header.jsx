import React from 'react'
import './header.css'

import Logo from '../logo'
import Arrow from '../../assets/images/arrow.svg'
import Gear from '../../assets/images/gear.svg'

export default function Header() {
    return (
        <header className="header">
            <section className="nav-container">
                <Logo />
                <a className="btn-config" href="#/">CONFIGURE <img className="gear" src={Gear} alt="Imagem de configuração"/></a>
            </section>

            <section data-aos="fade-up" className="home-container">
                <h1 className="title">CRIADO PARA FACILITAR A VIDA DE DESENVOLVEDORES</h1>
                <button className="btn-add">ADICIONE EM SEU SERVIDOR</button>
                <a href="#link-more"><button className="btn-more">SAIBA MAIS</button></a>
            </section>

            <section className="arrow-container">
                <img className="arrow" src={Arrow} alt="Seta para baixo" />
            </section>
        </header>
    )
}