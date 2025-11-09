/* eslint-disable @typescript-eslint/no-unused-vars */

import { useDispatch, useSelector } from "react-redux"
import { type AppDispatch, type RootState } from "../redux/store.ts"

import { selectAnswer } from "../redux/slices/quizSlice.ts"
import { useState } from "react"

const Meio = () => {
  const dispatch = useDispatch<AppDispatch>()  
  const questions = useSelector((state: RootState) => state.quiz.questions)
  const corretas = useSelector((state: RootState) => state.quiz.correctAnswer)
  const erradas = useSelector((state: RootState) => state.quiz.wrongAnswer)
  const answers = useSelector((state: RootState) => state.quiz.answersSelects)




  // console.log(corretas, erradas)
  const checkingAwswer = (question: string, answer: string) => {
    dispatch(selectAnswer({question: question, answer: answer}))   
    
  }

  console.log(answers)
  return (
    <div>
      {questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          <h2>{question.question}</h2>
          <div >
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <input 
                  type="radio" 
                  name={`${questionIndex}`} 
                  id={`${questionIndex}${optionIndex}`}
                  value={option}
                  onChange={() => checkingAwswer(question.question, option)}
                />
                <label htmlFor={`${questionIndex}${optionIndex}`}>
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button>Finalizar</button>
    </div>
  )
}

export default Meio