
import { useNavigate } from 'react-router'
import { useState } from 'react'

import homeCSS from '../styles/Home.module.css'

import { motion } from "framer-motion"
import { getDifficulty, getType, setDifficulty, setType } from '../context/setProblemParams'



const Home = () => {

    const navigate = useNavigate()

    const [displayDifficulty, setDisplayDifficulty] = useState(getDifficulty())
    const [displayMode, setDisplayMode] = useState(getType())

    const changeDifficulty = () => {
        const current = getDifficulty()

        switch(current) {
            case "Easy":
                setDifficulty("Medium")
                setDisplayDifficulty("Medium")
                break;
            case "Medium":
                setDifficulty("Hard")
                setDisplayDifficulty("Hard")
                break;
            case "Hard":
                setDifficulty("Mixed")
                setDisplayDifficulty("Mixed")
                break;
            case "Mixed":
                setDifficulty("Easy")
                setDisplayDifficulty("Easy")
                break;
        }
    }

    const changeMode = () => {
        const current = getType()

        switch(current) {
            case "Addition":
                setType("Subtraction")
                setDisplayMode("Subtraction")
                break;
            case "Subtraction":
                setType("Multiplication")
                setDisplayMode("Multiplication")
                break;
            case "Multiplication":
                setType("Division")
                setDisplayMode("Division")
                break;
            case "Division":
                setType("Addition")
                setDisplayMode("Addition")
                break;
        }
    }


    return (
        <main className={homeCSS.home_main}>
            
            <div className={homeCSS.header}>
                <h1>Math Brain!</h1>
                <p>Math practice for everyone</p>
            </div>

            <section className={homeCSS.options}>
                <motion.button type='button' onClick={() => navigate("/practice")}>Begin Practice</motion.button>
                <motion.button type='button' onClick={changeMode}>Mode: {displayMode}</motion.button>
                <motion.button type='button' onClick={changeDifficulty}>Difficulty: {displayDifficulty}</motion.button>
                <motion.button type='button'>How do I get started?</motion.button>
            </section>

            <div>

            </div>
        </main>
    )
}

export default Home
