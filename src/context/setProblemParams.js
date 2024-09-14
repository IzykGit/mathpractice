import Cookies from "js-cookie";

export const setType = (type) => {
    Cookies.set("type", type)
}

export const setDifficulty = (difficulty) => {
    Cookies.set("difficulty", difficulty)
}

export const getType = () => {
    const type = Cookies.get("type");

    if (type) {
        return type
    }
    else {
        Cookies.set("type", "Addition");
        return "addition"
    }
}

export const getDifficulty = () => {
    const difficulty = Cookies.get("difficulty")

    if (difficulty) {
        return difficulty
    }
    else {
        Cookies.set("difficulty", "Easy")
        return "Easy"
    }
}