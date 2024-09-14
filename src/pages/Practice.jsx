import { useEffect, useState } from "react"
import { getProblemsByTypeAndDifficulty } from "../hooks/getProblems"
import { getDifficulty } from "../context/setProblemParams"

const Practice = () => {


    const [guess, setGuess] = useState("")
    const [currentProblems, setCurrentProblems] = useState()
    const [randomGen, setRandomGen] = useState(0)

    const currentDifficulty = getDifficulty()

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
        }

    }

    const handleGuess = (e) => {
        setGuess(guess + e)
    }


    return (
        <>
        <div>

            <p>{currentDifficulty}</p>
            <main>
                {currentProblems && <h1>{currentProblems[randomGen].problem} = ?</h1>}
                <div>
                    <input type="text" id="guess" name="guess" value={guess} onChange={e => setGuess(e.target.value)}/>
                </div>

                <div>
                    <button type="button" value={0} onClick={e => handleGuess(e.target.value)}>0</button>
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
                    <button type="button" onClick={check}>SUBMIT</button>
                </div>

                

            </main>
        </div>

        </>

    )
}

export default Practice
