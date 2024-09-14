import { useEffect, useState } from "react"
import { getProblemsByTypeAndDifficulty } from "../hooks/getProblems"
import { getDifficulty } from "../context/setProblemParams"

import practiceCSS from "../styles/Practice.module.css"

const Practice = () => {


    const [guess, setGuess] = useState("")
    const [currentProblems, setCurrentProblems] = useState()
    const [randomGen, setRandomGen] = useState(0)

    const [streak, setStreak] = useState(0)



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
            setStreak(0)
        }
    }

    const handleGuess = (e) => {
        setGuess(guess + e)
    }


    return (
        <>
        <div>

            <p className={practiceCSS.display_streak}>Streak: {streak}</p>
            <main className={practiceCSS.main}>
                
                {currentProblems && <h1>{currentProblems[randomGen].problem} = ?</h1>}
                <div className={practiceCSS.input_container}>
                    <input type="text" id="guess" name="guess" value={guess} onChange={e => setGuess(e.target.value)} className={practiceCSS.input_field}/>
                </div>

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

                    <button type="button" onClick={() => setGuess(guess.slice(0, -1))}>DEL</button>
                    <button type="button" value={0} onClick={e => handleGuess(e.target.value)}>0</button>
                    <button type="button" onClick={check}>=</button>
                </div>

                

            </main>
        </div>

        </>

    )
}

export default Practice
