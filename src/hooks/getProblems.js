import axios from 'axios'
import { getDifficulty, getType } from '../context/setProblemParams'


export const getAddition = async () => {

    try {

        const response = await axios.get("/addition_problems.json")


        return response.data
        
    }
    catch (error) {
        console.error(error)
    }
}

export const getSubtraction = async () => {

    try {

        const response = await axios.get("/subtraction_problems.json")

        return response.data
    }
    catch (error) {
        console.error(error)
    }
}

export const getMultiplication = async () => {

    try {

        const response = await axios.get("/multiplication_problems.json")

        return response.data
    }
    catch (error) {
        console.error(error)
    }
}

export const getDivision = async () => {

    try {

        const response = await axios.get("division_problems.json")

        return response.data
    }
    catch (error) {
        console.error(error)
    }
}




export const getProblemsByTypeAndDifficulty = async () => {
    
    try {
        const type = getType()
        const difficulty = getDifficulty()
    
        let problemData = []
        
        switch(type) {
            case "Addition":
                problemData = await getAddition()
                break;
            case "Subtraction":
                problemData = await getSubtraction()
                break;
            case "Division":
                problemData = await getDivision()
                break;
            case "Multiplication":
                problemData = await getMultiplication()
                break;
            default:
                problemData = []
        }
    
        if (difficulty !== "Mixed") {
            problemData = problemData.filter(
                (problem) => problem.difficulty === difficulty
            );
        }
        
        return problemData;
    }
    catch (error) {
        console.error(error)
    }

}