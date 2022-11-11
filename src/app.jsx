import React, { useEffect } from 'react'
import './app.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

import Header from './components/template/header'
import Benefits from './components/template/benefits'
import Function from './components/template/functions'
import Footer from './components/template/footer'

export default function Application() {

    useEffect(function() {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div className="app">
            <Header/>
            <Benefits/>
            <Function/>
            <Footer/>
        </div>
    )
}