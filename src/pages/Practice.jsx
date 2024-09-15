import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { getProblemsByTypeAndDifficulty } from "../hooks/getProblems"

import { motion } from "framer-motion"
import { incorrectVariants } from "../data/framer-variants"


import practiceCSS from "../styles/Practice.module.css"


const Practice = () => {

    const navigate = useNavigate()

    const [guess, setGuess] = useState("")
    const [currentProblems, setCurrentProblems] = useState()
    const [randomGen, setRandomGen] = useState(0)

    const [streak, setStreak] = useState(0)

    const [incorrect, setIncorrect] = useState(false)


    useEffect(() => {
        
        const fetch = async () => {

            try {
                const data = await getProblemsByTypeAndDifficulty()
                const random = Math.floor(Math.random() * data.length)
                setRandomGen(random)
                setCurrentProblems(data)
            }
            catch (error) {
                console.error(error)
            }
        }

        fetch()

    }, [])

    const check = () => {

        if (currentProblems[randomGen].answer === Number(guess)) {
            setRandomGen(Math.floor(Math.random() * currentProblems.length))
            setGuess("")
            setStreak(streak + 1)
        }
        else {
            setIncorrect(true)
            setStreak(0)
            setTimeout(() => {
                setIncorrect(false)
            }, 900)
        }
    }

    const handleGuess = (e) => {
        setGuess(guess + e)
    }


    return (
        <>
        <div className={practiceCSS.head_container}>
            <p className={incorrect ? practiceCSS.display_streak_error : practiceCSS.display_streak}>Streak: {streak}</p>
            <button type="button" className={practiceCSS.back} onClick={() => navigate("/")}>Back</button>
        </div>

        <main className={practiceCSS.main}>
            
            <div className={practiceCSS.problem_width}>
                {currentProblems && <h1 className={practiceCSS.problem}>{currentProblems[randomGen].problem} = ?</h1>}

                <motion.div className={practiceCSS.input_container} style={incorrect && { border: "3px solid #F35F62"}}
                animate={incorrect ? "incorrect": "default"} variants={incorrectVariants}>
                    <input type="text" id="guess" name="guess" value={guess} onChange={e => setGuess(e.target.value)} className={practiceCSS.input_field}/>
                </motion.div>

                <div className={practiceCSS.number_buttons}>
                    <button type="button" value={1} onClick={e => handleGuess(e.target.value)}>1</button>
                    <button type="button" value={2} onClick={e => handleGuess(e.target.value)}>2</button>
                    <button type="button" value={3} onClick={e => handleGuess(e.target.value)}>3</button>
                    <button type="button" value={4} onClick={e => handleGuess(e.target.value)}>4</button>
                    <button type="button" value={5} onClick={e => handleGuess(e.target.value)}>5</button>
                    <button type="button" value={6} onClick={e => handleGuess(e.target.value)}>6</button>
                    <button type="button" value={7} onClick={e => handleGuess(e.target.value)}>7</button>
                    <button type="button" value={8} onClick={e => handleGuess(e.target.value)}>8</button>
                    <button type="button" value={9} onClick={e => handleGuess(e.target.value)}>9</button>
                    <button type="button" value={0} onClick={e => handleGuess(e.target.value)}>0</button>

                    <button type="button" value={"-"} onClick={e => handleGuess(e.target.value)}>-</button>
                    <button type="button" onClick={() => setGuess(guess.slice(0, -1))}>DEL</button>
                    <button type="button" onClick={check} className={practiceCSS.equals}>=</button>
                </div>
            </div>
        </main>
        </>

    )
}

export default Practice
