import React from 'react'
import './benefits.css'

import Clock from '../../assets/images/clock.svg'
import Config from '../../assets/images/config.svg'
import Community from '../../assets/images/community.svg'

export default function Benefits() {
    return (
        <section id="link-more" className="benefits">
            <div data-aos="zoom-in" className="cards">
                <div className="card space">
                    <img className="icon" src={Clock} alt="Tempo" />
                    <p className="description">Otimize seu tempo com diversas funcionalidades em um só lugar.</p>
                </div>
                <div className="card space">
                    <img className="icon" src={Config} alt="Configuração" />
                    <p className="description">Personalize o bot e deixe com a cara do seu servidor Discord.</p>
                </div>
                <div className="card">
                    <img className="icon" src={Community} alt="Comunidade" />
                    <p className="description">Faça parte da comunidade e contribua com a evolução do projeto.</p>
                </div>
            </div>
        </section>
    )
}