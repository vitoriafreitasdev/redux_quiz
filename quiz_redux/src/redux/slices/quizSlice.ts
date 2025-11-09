
import { createSlice } from "@reduxjs/toolkit";
import data from "../questionsQuiz/questions.ts"

const stages: string[] = ["inicial", "meio", "fim"]

interface questions {
    question: string,
    options: string[],
    answer: string
}

interface answers {
    question: string
    answer: string
}

interface inicialState {
    gamestages: string
    questions: questions[]
    correctAnswer: number
    wrongAnswer: number
    answersSelects: answers[] 
}
const inicialState: inicialState = {
    gamestages: stages[0],
    questions: data,
    correctAnswer: 0,
    wrongAnswer: 0,
    answersSelects: []
}

const quizSlice = createSlice({
    name: "createSlice",
    initialState: inicialState,
    reducers: {
        startGame: (state) => {
            state.gamestages = stages[1]
        },
        selectAnswer: (state, action) => {
            

            const question: string = action.payload.question
            const answer: string = action.payload.answer
            
            // Encontra o índice da resposta existente para esta pergunta
            const existingAnswerIndex = state.answersSelects.findIndex(
                item => item.question === question
            )
            
            if (existingAnswerIndex === -1) {
                // Se não existe, adiciona a nova resposta
                state.answersSelects.push({question, answer})
            } else {
                // Se já existe, substitui a resposta existente
                state.answersSelects[existingAnswerIndex].answer = answer
            }
        
           
        }
    }

})
export const {startGame, selectAnswer} = quizSlice.actions
export default quizSlice.reducer