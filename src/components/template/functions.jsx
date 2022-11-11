import React from 'react'
import './functions.css'

import Headphone from '../../assets/images/headphone.svg'
import Sale from '../../assets/images/sale.svg'
import Documentation from '../../assets/images/documentation.svg'
import Quizz from '../../assets/images/quizz.svg'

import FuncCard from '../funcCard'

export default function Function() {
    return (
        <section className="functions">
            <div className="func-container">
                <div className="func-row-container">
                    <FuncCard icon={Headphone} alt="Fone de ouvido" title="Ouça músicas enquanto escreve seus códigos" class="func-space-r"
                        description="Se concentre ouvindo músicas lo-fi sempre que estiver programando, com apenas um comando, você terá músicas tocando 24 horas." />
                    <FuncCard icon={Sale} alt="Promoções exclusivas" title="Tenha acesso a promoções e cursos exclusivos"
                        description="Ganhe descontos exclusivos para cursos e materiais voltado ao mundo da programação web, além de conteúdos exclusivos do tema." />
                </div>
                <div className="func-row-container func-space-t">
                    <FuncCard icon={Documentation} alt="Documentação" title="Acesse as documentações com apenas um comando" class="func-space-r"
                        description="Digitando apenas um comando, você tem acesso a documentação de qualquer linguagem e framework voltado ao mundo da programação web." />
                    <FuncCard icon={Quizz} alt="Perguntas e respostas" title="Responda a quizzes sobre programação"
                        description="Teste seus conhecimentos e adquira novas experiências com exercícios de perguntas e respostas sobre programação web." />
                </div>
            </div>
        </section>
    )
}