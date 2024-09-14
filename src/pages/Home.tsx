import React from 'react'
import { useNavigate } from 'react-router'

import homeCSS from '../styles/Home.module.css'

import { motion } from "framer-motion"

const Home = () => {

    const navigate = useNavigate()

    return (
        <main className={homeCSS.home_main}>
            
            <div className={homeCSS.header}>
                <h1>Math Strat!</h1>
                <p>Math practice for everyone</p>
            </div>

            <nav className={homeCSS.options}>
                <motion.button type='button' onClick={() => navigate("/practice")}>Begin Practice</motion.button>
                <motion.button type='button'>Mode: Addition</motion.button>
                <motion.button type='button'>Difficulty: Easy</motion.button>
                <motion.button type='button'>How do I get started?</motion.button>
            </nav>

            <div>

            </div>
        </main>
    )
}

export default Home
