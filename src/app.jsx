import React, { useEffect } from 'react'
import './app.css'

import Code from './assets/imgs/code.svg'
import Arrow from './assets/imgs/arrow.svg'
// import Gear from './assets/imgs/gear.svg'

import Notebook from './assets/imgs/notebook.png'
import Music from './assets/imgs/music.png'
import Documentation from './assets/imgs/documentation.png'
import Sale from './assets/imgs/sale.png'
import Quizz from './assets/imgs/quizz.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Application() {

    useEffect(function () {
        Aos.init({ duration: 900 })
    }, [])

    setTimeout(function () {
        const question = document.querySelectorAll('.question')
        const answer = document.querySelectorAll('.answer')

        for (let i = 0; i < question.length; i++) {
            question[i].onclick = function () {
                answer[i].classList.toggle('faq-toggle')
                question[i].classList.toggle('faq-arrow-toggle')
            }
        }
    }, 100)

    return (
        <div className="app">

            <header className="header">
                <div className="container">
                    <section className="header-top">
                        <img className="logo-icon" src={Code} alt="Logo" />
                        <strong className="logo-text">Codefy</strong>
                    </section>
                    <section data-aos="fade-up" className="header-main">
                        <div className="information-container">
                            <h1 className="title">Criado para facilitar a vida de desenvolvedores</h1>
                            <div className="btn-container">
                                <button className="btn btn-add">Adicione em seu servidor</button>
                                <button className="btn btn-settings">Configure</button>
                            </div>
                        </div>
                        <div className="image-container">
                            <img className="img-header" src={Notebook} alt="Notebook" />
                        </div>
                    </section>
                    <section data-aos="fade-up" className="header-bottom">
                        <img className="arrow" src={Arrow} alt="Seta para baixo" />
                    </section>
                </div>
            </header>

            <main className="main">
                <section className="numbers">
                    <div data-aos="fade-up" className="container numbers-content">
                        <div className="number-item">
                            <h4 className="number-title">248</h4>
                            <p className="number-description">Comunidades usam Codefy</p>
                        </div>
                        <div className="number-item">
                            <h4 className="number-title">+12MIL</h4>
                            <p className="number-description">Pessoas usam Codefy</p>
                        </div>
                        <div className="number-item">
                            <h4 className="number-title">19</h4>
                            <p className="number-description">Empresas usam Codefy</p>
                        </div>
                    </div>
                </section>
                <section data-aos="fade-up" className="function color-1">
                    <div className="container row">
                        <div className="func-info">
                            <h5 className="func-title">Ouça músicas enquanto escreve seus códigos</h5>
                            <p className="func-desc">Se concentre ouvindo músicas lo-fi sempre que estiver programando, com apenas um comando, você terá músicas tocando 24 horas.</p>
                        </div>
                        <div className="func-img">
                            <img className="img-func" src={Music} alt="Music" />
                        </div>
                    </div>
                </section>
                <section className="function color-2">
                    <div data-aos="fade-up" className="container row column-reverse">
                        <div className="func-img">
                            <img className="img-func" src={Documentation} alt="Documentation" />
                        </div>
                        <div className="func-info">
                            <h5 className="func-title">Acesse as documentações com apenas um comando</h5>
                            <p className="func-desc">Digitando apenas um comando, você tem acesso a documentação de qualquer linguagem e framework de programação.</p>
                        </div>
                    </div>
                </section>
                <section data-aos="fade-up" className="function color-1">
                    <div className="container row">
                        <div className="func-info">
                            <h5 className="func-title">Tenha acesso a promoções exclusivas</h5>
                            <p className="func-desc">Ganhe descontos exclusivos para cursos e materiais voltado ao mundo da programação, além de conteúdos exclusivos do tema.</p>
                        </div>
                        <div className="func-img">
                            <img className="img-func" src={Sale} alt="Sale" />
                        </div>
                    </div>
                </section>
                <section className="function color-2">
                    <div data-aos="fade-up" className="container row column-reverse">
                        <div className="func-img">
                            <img className="img-func" src={Quizz} alt="Quizz" />
                        </div>
                        <div className="func-info">
                            <h5 className="func-title">Responda a um quizz sobre programação</h5>
                            <p className="func-desc">Teste seus conhecimentos e adquira novas experiências com exercícios de perguntas e respostas sobre programação.</p>
                        </div>
                    </div>
                </section>
                <section className="questions">
                    <div data-aos="fade-up" className="container questions-container">
                        <h5 className="questions-title">Perguntas frequentes</h5>
                        <div className="faq-question">
                            <div className="question">
                                <h4 className="faq-title">Como adicionar o bot em meu servidor Discord ?</h4>
                                <img className="faq-arrow" src={Arrow} alt="Seta" />
                            </div>
                            <div className="answer">
                                <p className="faq-response">Clique <a className="faq-link" href="/">aqui</a> para que possa fazer login com o Discord, após isso selecione o servidor que deseja adicionar o bot e forneça as permissões necessárias para que o bot funcione de forma correta!</p>
                            </div>
                        </div>
                        <div className="faq-question">
                            <div className="question">
                                <h4 className="faq-title">Como saber os comandos do bot ?</h4>
                                <img className="faq-arrow" src={Arrow} alt="Seta" />
                            </div>
                            <div className="answer space-bottom">
                                <p className="faq-response">Ao adicionar em seu servidor Discord, você poderá digitar <strong>!comandos</strong> em qualquer canal de texto, para ter acesso a todos benefícios da Codefy.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div className="container footer-container">
                    <div className="footer-links">
                        <div className="footer-column">
                            <h6 className="footer-title">Contato</h6>
                            <div className="footer-options">
                                <a className="footer-item" href="/">Discord</a>
                                <a href="/" className="footer-item">Instagram</a>
                                <a href="/" className="footer-item">E-mail: contato@codefy.com</a>
                            </div>
                        </div>
                        <div className="footer-column">
                            <h6 className="footer-title">Projeto</h6>
                            <div className="footer-options">
                                <a href="/" className="footer-item">github.com/hxmoura/codefy</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-logo">
                        <img className="logo-icon" src={Code} alt="Logo" />
                        <strong className="logo-text">Codefy</strong>
                    </div>
                </div>
            </footer>
        </div>
    )
}