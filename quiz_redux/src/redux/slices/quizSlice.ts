import { createSlice } from "@reduxjs/toolkit";
import data from "../questionsQuiz/questions.ts"

const stages: string[] = ["inicial", "meio", "fim"]

interface questions {
    question: string,
    options: string[],
    answer: string
}

interface inicialState {
    gamestages: string
    questions: questions[]
}
const inicialState: inicialState = {
    gamestages: stages[0],
    questions: data
}

const quizSlice = createSlice({
    name: "createSlice",
    initialState: inicialState,
    reducers: {
        startGame: (state) => {
            state.gamestages = stages[1]
        }
    }

})
export const {startGame} = quizSlice.actions
export default quizSlice.reducer