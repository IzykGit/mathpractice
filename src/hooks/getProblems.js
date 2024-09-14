import axios from 'axios'

export const getAddition = async () => {

    try {

        const response = await axios.get("/addition_problems.json")

        console.log(response.data)
        return response.data
        
    }
    catch (error) {
        console.error(error)
    }
}

export const getSubtraction = async () => {

    try {

        const response = await axios.get("/subtraction_problems")

        return response.data
    }
    catch (error) {
        console.error(error)
    }
}

export const getMultiplication = async () => {

    try {

        const response = await axios.get("/multiplication_problems")

        return response.data
    }
    catch (error) {
        console.error(error)
    }
}

export const getDivision = async () => {

    try {

        const response = await axios.get("division_problems")

        return response.data
    }
    catch (error) {
        console.error(error)
    }
}
