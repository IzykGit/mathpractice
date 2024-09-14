import { useState, useEffect } from "react"
import { getAddition } from "../hooks/getProblems"

const Practice = () => {

    const [first, setfirst] = useState([])

    useEffect(() => {

        const fetch = async () => {
            const problems = await getAddition()
            setfirst(problems)
        }

        fetch()
    }, [])

    console.log(first)

    return (
        <div>
        fjklsdj
        </div>
    )
}

export default Practice
